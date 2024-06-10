import React from "react";

const imgObj = {
  img1: "https://cdni.iconscout.com/illustration/premium/thumb/school-building-6464827-5349409.png?f=webp",
  img2: "https://t3.ftcdn.net/jpg/02/93/56/08/360_F_293560899_5Cpb9oAwM0cRw8xcaGFIJCZ265wqyQVu.jpg",
  img3: "https://i.pinimg.com/originals/83/6c/0c/836c0cd3e26bf8e0fb0c02926afc8a4e.jpg",
  img4: "https://static.vecteezy.com/system/resources/previews/019/015/934/non_2x/teacher-and-students-are-studying-in-the-classroom-cartoon-vector.jpg",
};
const Hero = () => {
  return (
    <>
    <section className="hero">
        <h1 className="" >Welcome To School of <span>Excellency</span></h1>
      <div className="slider">
        <div className="silder-img">
          <img src={imgObj.img1} alt="" />
        </div>

        {/* <div className="silder-img">
          <img src={imgObj.img2} alt="" />
        </div>

        <div className="silder-img">
          <img src={imgObj.img3} alt="" />
        </div>

        <div className="silder-img">
          <img src={imgObj.img4} alt="" />
        </div> */}
      </div>
    </section>


    </>

    
  );
};

export default Hero;
