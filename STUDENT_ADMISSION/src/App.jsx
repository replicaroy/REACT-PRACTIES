import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar/Navbar'
import Footers from './pages/Footer/Footers'
import Mainrouter from './Mainrouter'


function App() {

  return (
    <>
<Navbar/>
<Mainrouter/>
<Footers/>
    </>
  )
}

export default App
