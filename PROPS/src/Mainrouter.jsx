import React from "react";
import { Routes, Route } from "react-router-dom";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Girls from "./Components/Girls";
import NoPage from "./Components/NoPage";
import Navbar from "./Components/Navbar";

function Mainrouter() {
  return (
      <Routes>   
      <Route path="/" element={<Men />} />;
      <Route path="women" element={<Women />} />;
      <Route path="girls" element={<Girls />} /> ;
      <Route path="/*" element={<NoPage />} /> ;
    </Routes>  
  );
}

export default Mainrouter;
