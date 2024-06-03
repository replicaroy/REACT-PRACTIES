import { useState } from 'react'
import './App.css'
import Form from './component/Form'
import Form2 from './Form2'
import Forms3 from './component/Forms3'
import Arrmap from './component/Arrmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form/> */}
      {/* <Form2/> */}
      <Forms3/>  
      {/* <Arrmap/> */}

    </>
  )
}

export default App
