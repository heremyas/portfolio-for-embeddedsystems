import React from "react";
import Projects from "../components/Projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div id="projects" className="ProjectsPage">
      <section className="thirdLeft">
        <div className="box">
          <h1 className="myName">Projects</h1>
        </div>
      </section>
      <section className="thirdRight">
        <Projects />
      </section>
    </div>
  );
}

export default ProjectsPage;
