import React from "react";
import "./ProjectsPage.css";
import { Carousel, Col } from "react-bootstrap";
import "../images/blackjack.jpg";
import "./Carousel.tsx";

const ProjectsPage = () => {
  return (
    <>
      <center>
        <div className="my-projects-header" id="my-projects-header">
          <h1>My Projects</h1>
        </div>
        <div className="projects" id="projects">
          <Col>
            <div id="project-image">
              <img
                src="blackjack.jpg"
                alt="Blackjack project"
                width="250px"
                height="150px"
              />
            </div>
            <div id="project-details">
              <p>Group Project</p>
              <button onClick={<Carousel />}>View Technologies used</button>
              {/* <p>Used Technologies - Node.js with React, Express, MongoDB, API's</p> */}
            </div>
          </Col>
        </div>
      </center>
    </>
  );
};
export default ProjectsPage;
