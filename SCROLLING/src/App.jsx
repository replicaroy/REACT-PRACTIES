import { useState } from 'react'
import './App.css'
import Nvabar from './Components/Nvabar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nvabar/>
    </>
  )
}

export default App
