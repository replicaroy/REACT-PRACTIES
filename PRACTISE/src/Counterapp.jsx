import React, { useState } from 'react'

const Counter = () => {
const [counter, setcounter] = useState(0)

const plusVal = ()=> {
    setcounter (counter+1)
}
const resetVal = ()=> {
    setcounter(0)
}
const reduceVal = () => {
  if (counter === 0) {
    return; // Do nothing if counter is already at 0
  }
  setcounter(counter - 1);
};

  return (
    <div style={{ width:'500px', margin: 'auto' , borderRadius:'10px', backgroundColor: 'rgb(240, 240, 240)', padding: '10px',marginTop: 50, marginBottom: 50}}>
     <div className="value-box"
     style={{padding: '10px 1px', width: '400px', borderRadius: 10, margin: '20px auto', backgroundColor: 'rgb(250, 250, 250)'}}
     > <h1 style={{fontSize:40}}>{counter}</h1></div>
     <div className="button-box"
     style={{padding: '10px 20px', width: '400px', display:'flex', gap:'20px', flexGrow: 1, margin:' auto'}}>
        <button onClick={plusVal} className="btn-plus" style={{padding: '1px 40px', border: 'none', width:'100%', background:'green', color:'white'}}> <h2>+</h2></button>
        <button onClick={resetVal}  className="btn-reset" style={{padding: '1px 40px', border: 'none', width:'100%',background:'gray', color:'white'}}><h2>Reset</h2></button>
        <button onClick={reduceVal}  className="btn-reduce" style={{padding: 'px 40px', border: 'none', width:'100%',background:'red', color:'white'}}><h2>-</h2></button>
     </div>
     
    </div>
  )
}

export default Counter
