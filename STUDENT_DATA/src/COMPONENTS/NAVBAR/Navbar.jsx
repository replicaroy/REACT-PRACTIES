import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar w-full h-20 bg-white shadow fixed top-0 left-0">
      <div className="navitem flex justify-between items-center">
        <div className="logo flex items-center text-3xl">
          <img
            src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png"
            alt="school logo"
            style={{ width: 70 }}
          />
          <h1 style={{marginLeft: 10, fontWeight: 'bold', color: 'rgb(19, 18, 18)'}} >B.I.S. School</h1>
        </div>
        <div className={`navlink 2xl:w-5/12 xl:w-6/12 lg:w-7/12 md:w-8/12 ${menuOpen ? 'open' : ''}`}>
          <ul className="flex justify-between text-xl text-gray-800">
            <li>Home</li>
            <li>About</li>
            <li>Students</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="menu text-3xl" onClick={toggleMenu}>
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

