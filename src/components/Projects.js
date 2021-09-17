import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="Projects">
      <div className="projects_container projects_container_odd">
        <div className="img_container">
        </div>
        <div className="project_details_container">
          <p className="project_title">BOTANIM</p>
          <p>
            <span>
              <strong>Description: </strong>
            </span>{" "}
            Botanim is a Front End Project that i built as a practice for my
            React skill. I use the trefle plant API to gather data and React JS
            for the main U/I. Click the link to try it.{" "}
            <span>
              <a
                href="https://botanim.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Preview here</strong>
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="projects_container projects_container_odd">
        <div className="img_container">
          <img alt="Project Thumbnail" src="#" />
        </div>
        <div className="project_details_container">
          <p className="project_title">JEM TECH</p>
          <p>
            <span>
              <strong>Description: </strong>
            </span>{" "}
            Jem Tech is a blog site of mine. I use NEXTJS for the Frontend and
            DJANGO for the Backend. In this project, I learned how to create a
            Server and connect it in a Client.{" "}
            <span>
              <a
                href="https://jemtech.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Preview here</strong>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
