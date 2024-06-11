import React from 'react'
import './footer.css'
import "remixicon/fonts/remixicon.css";



const Footer = () => {
  return (
   
    <>
    <div className="footer-container ">
      <div className="foot-one">
        <div className="events">
        <h1>Upcoming Events</h1>
        <p>Second term Examination</p>
        <p>Winter Games</p>
        <p>Eastern Tour</p>
        </div>

        <div className="events">
        <h1>Schools Hearichy map</h1>
        <p>Branches</p>
        <p>Teams</p>
        <p>H. R. Department</p>
        </div>

        <div className="events">
        <h1>Games Department</h1>
        <p>Cricket</p>
        <p>Football</p>
        <p>Basketball</p>
        </div>
      </div>

      <div className="foot-two">
        <h1>Connect with us</h1>
        <div className="social">
        <i class="ri-twitter-x-line"></i>
        <i class="ri-youtube-fill"></i>
        <i class="ri-facebook-circle-fill"></i>
        <i class="ri-instagram-fill"></i>
        <i class="ri-whatsapp-fill"></i>
        </div>
      <div className="connect">
        <input type="text" placeholder='Email' />
        <button className="btn">Submit</button>
      </div>
      </div>



    </div>
    
    </>
      )
}

export default Footer
