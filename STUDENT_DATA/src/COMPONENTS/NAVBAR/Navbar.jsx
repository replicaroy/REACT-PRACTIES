import React from "react";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <div className=" w-full h-20 bg-white px-24 shadow fixed">
      <div className="navitem  flex justify-between  items-center">
        <div className="logo">
          <img
            src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png"
            alt="schhol image"
            style={{ width: 70 }}
          />
        </div>
        <div className="navlink w-5/12">
            <ul className="flex justify-between text-xl text-gray-800 ">
                <li>Home</li>
                <li>About</li>
                <li>Students</li>
                <li>Gallery</li>
                <li>Contact Us</li>
            </ul>
        </div>
        {/* <div className="news-letter">
            <button className="btn">Hello</button>
        </div> */}
        <div className="menu text-3xl " style={{visibility: 'hidden'}}>
        <i class="ri-menu-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
