import { useState } from 'react'
import axios from 'axios'

const Dashboard = ({ token }) => {
    const [songs, setSongs] = useState()

    axios.get('/topSongs', (req, res) => {
        console.log(res)
    })

    return (
        <div>
            <h1>Spotify Dashboard</h1>
            <h3>Favorite Songs</h3>
            <h3>Favorite Playlists</h3>
        </div>
    )
}

export default Dashboard