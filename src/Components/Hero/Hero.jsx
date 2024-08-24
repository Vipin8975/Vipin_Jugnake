import React from "react";
import "../Hero/Hero.css";
import resume from "../../assets/Resume_Vipin_Jugnake.pdf";

const Hero = () => {
  return (
    <div className="hero">
      {/* <img src={profile_img} style={
        {
          height : "250px",
          width : "160px",
          borderRadius : '20%'
        }
      } /> */}
      <h1>
        {" "}
        <span>I am Vipin Jugnake </span>, MERN Stack Developer
      </h1>
      {/* <p>This is my Official Portfolio website ,Currently, I am pursing my
          B.Tech degree form Anjuman College of Engineering and Technology . I
          am a Final years Computer Science Engineer , Passionate about the
          endless possibilities that the world of technology holds.</p> */}
      <div className="hero-action">
        <a
          href="https://www.linkedin.com/in/vipinjugnake/"
          className="hero-connect"
        >
          Connect with Me
        </a>
        <a href={resume} className="hero-resume">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
