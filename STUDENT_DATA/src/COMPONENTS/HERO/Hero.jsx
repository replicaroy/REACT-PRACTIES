import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
    <div className='hero'>
      <div className="caption">
      <h1>Welcome to <span className="school"> BHARAT Internationl school </span>   </h1>
      <h3>we offer education of excellency</h3>
      <h4>Our aim to provide Best oVERALL ABILITY ...</h4>
      </div>
   
      {/* <button>Know More</button> */}
      <div className='hero-img-div ' >    
      <img src="High-School.png" alt="Hero"  />
      </div>
    </div>
    </div>
  );
};

export default Hero;
