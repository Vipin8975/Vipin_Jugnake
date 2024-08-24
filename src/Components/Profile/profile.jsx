import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import MyWork from "../MyWork/MyWork";

import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const profile = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <MyWork />
      {/* <Mywork2 /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default profile;
