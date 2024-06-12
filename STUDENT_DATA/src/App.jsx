import { useState } from "react";
import "./App.css";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import Hero from "./COMPONENTS/HERO/Hero";
import Form from "./Form/Form";
import Footer from "./COMPONENTS/FOOTER/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Form />
      <Footer />
    </>
  );
}

export default App;
