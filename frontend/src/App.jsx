import { useState } from 'react'

import Login from './components/Login'
import Dashboard from './components/Dashboard'

import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)

  const handleButtonClick = () => {
    setToggle(true)
  }

  // Toggles from login to dashboard if logged in
  return (
    <div>
      
      {toggle ? <Dashboard /> : <Login onButtonClick={handleButtonClick}/>}
      
    </div>
  )
}

export default App
