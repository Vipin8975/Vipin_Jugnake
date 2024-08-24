import React from "react";
import "../About/About.css";
import theme_pattern from "../../assets/Self_photo_crop.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={theme_pattern} style={{
            height : "400px",
            width: "400px"
          }} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello Everyone ! , My name is Vipin Jugnake and I am from
              Maharashtra , Nagpur . I am a Passionate Computer Science Engineer
              pursing my degree form Anjuman College of Engineering and
              Technology. I have Completed my Internship form 
              <a href="https://coderfuelinfotech.com/"> CoderFuel Infotech</a> in
              web development{" "}
            </p>
            <p>
              Over the past three years, I've been immersed in the world of
              coding, algorithms, and software development. It's been an
              incredible journey of growth and discovery. Now , I am an Intern
              in 
              <a href="https://edumixtechnologies.com/">  Edumix Technologies
              </a>
              I have developed various of Project which is given in detail view
              in Project Section .
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTMl & CSS</p><hr style={{
                width : '80%'
            }}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{
                width : '55%'
            }}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{
                width : '70%'
            }}/></div>
            <div className="about-skill"><p>Bootstrap</p><hr style={{
                width : '60%'
            }}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Gets Reward</h1>
            <p>Has Achieve Certificates from Microsoft</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Gets Reward</h1>
            <p>Has Achieve Certificates from TCS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Gets Reward</h1>
            <p>Has Achieve Certificates from CodeChef</p>
        </div>
      </div>
    </div>
  );
};

export default About;
