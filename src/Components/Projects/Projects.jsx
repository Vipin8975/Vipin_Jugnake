import React from "react";
import "../Projects/Projects.css";

const Projects = () => {
  return (
    <div>
      <div id="project" className="projects">
        <h2>My Projects</h2>

        <div className="about-achievements">
          <div className="about-achievement">
            <h3>PlantLeaf Disease Detection using DL</h3>
            <p>
              Have created a Program that detects weather if plant leaf have
              disease or not.This project give a brief information plant leaf
              disease containing more than 10,000 of image in dataset for
              training and testing .
            </p>
          </div>
          <hr />
          <div className="about-achievement">
            <h3>Project WorkStation (Ongoing)</h3>
            <p>
              This Project is Contribution for Anjuman College Of Engineering
              and Technology which will Showcases the Projects developed by the
              Students of Anjuman College The Project Promotes Knowledge sharing
              , Collaboration and Enhance Visibility of Students Projects
            </p>
          </div>
          <hr />
          <div className="about-achievement">
            <h3>Profolio Website</h3>
            <p>
              Demonstrates my abilities and expertise in a clear and visually
              appealing manner. A professional website establishes you as a
              credible and reliable professional. Attracts potential clients,
              employers, or collaborators. Creating a strong personal brand
              identity.To track my progress and showcase growth over time.
            </p>
          </div>
          <hr />
          <div className="about-achievement">
            <h3>Vinta Clone </h3>
            <p>
              {" "}
              Vinta, a Mini-ChatGPT UI I developed using React.js. This project
              was an incredible journey, pushing my skills in front-end
              development and responsive design using React JS.ully responsive
              UI, providing seamless user experience across devices Intuitive
              design with a focus on user interaction and accessibility
              Efficient state management using React.js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
