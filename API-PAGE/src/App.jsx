import { useState } from 'react'
import './App.css'
import Mainpage from './Mainpage'
import Header from './Header'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
   <Mainpage/>    
<Footer/>
    </>
  )
}

export default App
