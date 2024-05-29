import React, { useEffect } from "react";
import { gsap } from "gsap";

function Props({ data }) {
  // gsap.to(".navbar h1", {
  //   opacity: 1,
  //   x: 70,
  //   duration: 1.5,
  //   stagger: 0.2,
  // });

  // gsap.to(".nav-items li  ", {
  //   opacity: 1,
  //   y: 20,
  //   duration: 1,
  //   // stagger: 0.2,
  // });

  return (
    <div className="item-parent">
      {data.map((ele) => {      
        // Debug: Check if ele.name is defined and is a string
        console.log(ele.name, typeof ele.name);
        return (
          <div className="item-div" key={ele.id}>       
            <div className="img-div">
              <div className="love">
                <i className="fa-regular fa-heart"></i>
              </div>
              <img src={ele.image} alt="" />
            </div>  
            <div className="details-parent">     
            <div className="details">
              {/* Ensure ele.name is a string and slice is called correctly */}
              <p>{ele.name ? ele.name.slice(0, 30) : "No Name"}</p>
              <div className="price-rating">
                <h4>
                  {" "}
                  $<span className="price-span">{ele.price}</span>
                </h4>
                {/* <h4>Stars {ele.rating}</h4> */}
              </div>
            </div>
           
            <div className="btn-div">
              <button>Add to Cart</button>
              <button>Buy Now</button>
            </div>
            </div> 
          </div>
        );
      })}
    </div>
  );
}

export default Props;
