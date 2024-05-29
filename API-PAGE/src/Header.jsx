import React, { useState } from 'react'

function Header() {

const [color, setColor] = useState(false)

const changColor = () =>{
  if(window.scrollY >=100){
    setColor(true)
  }
  else{
    setColor(false)
  }
}

window.addEventListener('scroll', changColor)


  return (
    <>
      <header className={ color ? 'header header-bg' : 'header'}>
        <div className="heading">
            <h1>  Shopping.com</h1>
        </div>
        <div className="navitem">
           <ul>
            <li>Products</li>
            <li>Category</li>
            <li>NEw Arrivels</li>
            <li>Home-Decor</li>
            <li>Blogs</li>           
           </ul>
        </div>
        <div className="login">
            <div className="input">
                <input type="text" placeholder='Login' />
            </div>
            <div className="input" >
                <input type="text" placeholder='SignUp' />
            </div>
        </div>
      </header>    
    </>
  )
}

export default Header
