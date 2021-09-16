import React from "react";
import "./About.css";

function About() {
  return (
    <div id="secondPage" className="About mainContainer about">
      <section className="secondLeft">
        <p className="aboutMe">
          I am a Computer Engineering student who fell inlove with Software. I
          like discovering new technologies and building projects from scratch.
          When I don't have assignments, I usually code and when I have, I still
          code.
          <br></br>
          Apart from coding,
          <br></br>I shred my guitar during breaktime.
        </p>
      </section>
      <section className="secondRight">
        <div className="box">
          <h1 className="myAbout">About Me</h1>
        </div>
      </section>
    </div>
  );
}

export default About;
