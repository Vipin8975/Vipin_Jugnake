import React from "react";
import "../MyWork/MyWork.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

// import arrow_icon from "../../assets/right-arrow.png"

const MyWork = () => {
  return (
    <div>
      <div id="certification" className="projects">
        <h2>My Certification</h2>

        <div className="about-achievements">
          <div className="about-achievement">
            <h1>TCS iON</h1>
            <img
              src={img1}
              style={{
                height: "300px",
                width: "300px",
              }}
            />
          </div>
          <hr />
          <div className="about-achievement">
            <h1>TCS</h1>
            <img
              src={img2}
              style={{
                height: "300px",
                width: "300px",
              }}
            />
          </div>
          <hr />
          <div className="about-achievement">
            <h1>Microsoft</h1>
            <img
              src={img3}
              style={{
                height: "300px",
                width: "300px",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="projects projects-part2" id="projects">
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>CodeChef</h1>
              <img
                src={img4}
                style={{
                  height: "300px",
                  width: "300px",
                }}
              />
            </div>
            <hr />
            <div className="about-achievement">
              <h1>Skill-India</h1>
              <img
                src={img5}
                style={{
                  height: "300px",
                  width: "300px",
                }}
              />
            </div>
            <hr />
            <div className="about-achievement">
              <h1>Nestle</h1>
              <img
                src={img6}
                style={{
                  height: "300px",
                  width: "300px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
