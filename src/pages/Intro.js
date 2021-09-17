import React from "react";
import myimg from "../assets/images/myimg.jpg"

function Intro() {
  return (
    <div id="homePage" className="mainContainer home Intro">
      <section className="left">
        <div className="box">
          <h1 className="myName">
            Hello I am
            <br></br>Jeremiah Valencia
            <br></br>
            <br></br>
            <br></br>Computer Engineering 
            <br></br>Student
            <br></br>at DHVSU
          </h1>
        </div>
      </section>
      <section className="right">
        <div className="box1">
          <div className="imgContainer">
            <img
              alt="myimage"
              className="myImage"
              src={myimg}
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
