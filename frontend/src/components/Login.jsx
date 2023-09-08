import axios from 'axios'

const Login = () => {
    const handleLogin = async () => {
        const response = await axios.get('http://localhost:3000/login')
        window.location.href = response.data
    }

    return (
        <div>
            <h1>Spotify Dashboard</h1>
            <button onClick={handleLogin}>Login with Spotify</button>
        </div>
    )
}

export default Login