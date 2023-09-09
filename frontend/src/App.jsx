import { useState, useEffect } from 'react'

import Login from './components/Login'
import Dashboard from './components/Dashboard'

import './App.css'

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [token, setToken] = useState('')

  useEffect(() => {
    const urlParams= new URLSearchParams(window.location.search)
    const accessToken = urlParams.get('access_token')

    if (accessToken) {
      setToken(accessToken)
      setAuthenticated(true)
    }
  })

  // Toggles from login to dashboard if logged in
  return (
    <div>
      
      {authenticated ? <Dashboard token={token}/> : <Login />}
      
    </div>
  )
}

export default App
