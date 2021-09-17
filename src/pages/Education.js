import React from "react";
import EducationBackground from "../components/EducationBackground";

function Education() {
  return (
    <div id="education" className="ProjectsPage">
      <section className="thirdLeft">
        <div className="box">
          <h1 className="myName">Education</h1>
        </div>
      </section>
      <section className="thirdRight">
        <EducationBackground />
      </section>
    </div>
  );
}

export default Education;
