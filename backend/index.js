const express = require('express')
const querystring = require('querystring')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())

const client_id = '178ab7000a424c7999c1506805ba9893'
const redirect_uri = 'http://localhost:3000/callback'
const client_secret = '2964822531ef48eea6ca63dafe71f0fa'

app.get('/', (req, res) => {
    res.redirect('Success')
})

app.get('/login', (req, res) => {
    const state = '94kguf7fu74i78r7'
    const scope = 'user-read-private user-read-email'

    res.send('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        })
    )
})

app.get('/callback', (req, res) => {
    const code = req.query.code || null
    const state = req.query.state || null

    if (state === null) {
        res.redirect('/#' + 
            querystring.stringify({
                error: 'state_mismatch'
            })
        )
    } else {
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            method: 'post',
            params: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
            },
        }

        axios(authOptions)
            .then(response => {
                access_token = response.data.access_token
                
                if (access_token) {
                    res.redirect('http://localhost:5173?access_token=' + access_token)
                } else {
                    res.status(500).send('Access token not found')
                }
            })
            .catch(error => {
                console.log(error)
                res.status(500).send('Error requesting token')
            })
    }
})

app.get('/topSongs', () => {

})

const PORT = 3000
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App listening on port ${PORT}`)
})