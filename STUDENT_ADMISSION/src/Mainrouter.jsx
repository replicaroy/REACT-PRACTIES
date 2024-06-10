import React from 'react'
import { Routes, Route } from "react-router-dom";
import Hero from './pages/Hero/Hero'
import Students from './pages/Students/Students'
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';

const Mainrouter = () => {
  return (
    <Routes>      
      <Route path="/" element={<Hero />} />;  
      <Route path="about" element={<About />} /> ;
      <Route path="gallery" element={<Gallery />} /> ;
      <Route path="/students" element={<Students />} /> ;
      {/* <Route path="/*" element={<NoPage />} /> ; */}
    </Routes>  
  )
}

export default Mainrouter





