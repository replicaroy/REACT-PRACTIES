import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './pages/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='about' element={<About/>} />
  <Route path='contact' element={<Contact/>} />

 
</Routes>
</BrowserRouter>
</>
  )
}

export default App
