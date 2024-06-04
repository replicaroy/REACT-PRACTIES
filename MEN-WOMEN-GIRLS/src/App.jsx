import React, { useEffect, useState } from "react";
import "./App.css";
import Props from "./Components/Props";
import Mainrouter from "./Mainrouter";
import Navbar from "./Components/Navbar";
import { useGSAP } from "react";
import Footer from "./Components/Footer";

function App() {
  // useGSAP(()=>{

  // })

  return (
    <>
      <Navbar price = {Price} />
      <Mainrouter />
      <Footer/>
    </>
  );
}

export default App;
