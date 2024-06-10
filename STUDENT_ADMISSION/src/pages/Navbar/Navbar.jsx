import React from 'react';
import "remixicon/fonts/remixicon.css";
import {Link, NavLink } from "react-router-dom";
import './navbar.css'

const imgObj = {}

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navitems">
            <div className="logo">
    <img src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png" alt="schhol image" style={{width: 70}} />
            </div>
            <div className="navmenu">
                <ul>
                    <li>  <NavLink to="/" >Home</NavLink> </li>           
                    <li>  <NavLink to="/about" >About</NavLink> </li>
                    <li>  <NavLink to="/gallery" >Gallery</NavLink> </li>
                    <li>  <NavLink to="/students" >Students</NavLink> </li>
                    <li>  <NavLink to="/Contactus" >Contact Us</NavLink> </li>
                    
                </ul>
            </div>
            <div className="new-student">
       <button className=' px-2 py-2 rounded' >News Latter</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
