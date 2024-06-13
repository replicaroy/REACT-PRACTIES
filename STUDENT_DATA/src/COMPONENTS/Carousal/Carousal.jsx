import React from "react";
import { Carousel } from "antd";

const contentStyle = {
 textAlign : 'center',
 width: "80%",
 height: "40%",
 backgroundr: 'red',
 marginTop: '100px',
 marginBottom: '-50px'
};
const imgclass = {
  width: "100%",
  height: "100%",
  margin: 'auto'
//   marginTop: "-150px",
};
const Carousal = () => (
  <Carousel autoplay style={{ marginTop: '110px',minWidth: '400px', paddingLeft: '50px' , width: '40%',  height: "20%", backgroundr: 'red' ,  margin: 'auto'}}>
    <div >
      <h3 style={contentStyle}>
        <img src="school.jpg" alt="Hero" style={imgclass} />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="education.jpg" alt="Hero" style={imgclass} />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="classroom.jpg" alt="Hero" style={imgclass} />
      </h3>
    </div>
    {/* <div>
      <h3 style={contentStyle}>
        <img src="High-School.png" alt="Hero" style={imgclass} />
      </h3>
    </div> */}
  </Carousel>
);
export default Carousal;
