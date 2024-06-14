import React from 'react'
import{Link ,Element} from 'react-scroll'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Service from '../Pages/Service'

const Nvabar = () => {
  return (
    <div>
      <div className="container">
        <Link to="/" smooth={true}  duration={500} >Home</Link>
        <Link  to="about" smooth={true}  duration={500} >About</Link>
        <Link to="contact" smooth={true}  duration={500} >Contact</Link>
        <Link to="service" smooth={true}  duration={500} >Service</Link>
      </div>


    
<Element name='/'>
        <Home/>
      </Element>
      <Element name='about'>
        <About/>
      </Element>
      <Element name='contact'>
        <Contact/>
      </Element>
      <Element name='service'>
        <Service/>
      </Element>

    </div>
  )
}

export default Nvabar
