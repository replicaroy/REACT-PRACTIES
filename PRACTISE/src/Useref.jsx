import React from 'react'
import { useRef } from 'react'


const Useref = () => {
    const Newref =  useRef()

    const Focus = ()=> {
            Newref.current.style.padding = '100px'
            Newref.current.style.backgroud = 'yellow'
            Newref.current.style.backgroud = 'yellow'
            Newref.current.style.border = '1px solid'
            Newref.current.style.color = 'purple'          
    }
  return (
    <div>
        {/* <input type="text" ref={Newref}  style={{border: '1px solid gray'}} /> */}
        <div ref={Newref}>
            <h1>hello world</h1>
        </div>
        <button onClick={Focus}> Focus</button>
      

    </div>
  )
}

export default Useref
