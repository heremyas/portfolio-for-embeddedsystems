import React from "react";
import immersion from "../assets/images/certs/immersion.jpg";
import icpep from "../assets/images/certs/icpep.jpg";
import ml from "../assets/images/certs/ml.jpg";
import robotics from "../assets/images/certs/robotics.jpg";
import preimmersion from "../assets/images/certs/preimmersion.jpg";
import ama from "../assets/images/certs/ama.jpg";

import "./CertsComp.css";
function CertsComp() {
  return (
    <section className="secondLeft">
      <div className="cert-item">
        <div className="img-container">
          <img src={immersion} />
        </div>
        <strong>
          <p>
            80 Hours of On-the Job Training at 600th Air Base Group | Clask Air
            Base
          </p>
        </strong>
        <p>January 2018 - February 2018</p>
      </div>

      <div className="cert-item">
        <div className="img-container">
          <img src={icpep} />
        </div>
        <strong>
          <p>ICpEP Regional Conference</p>
        </strong>
        <p>January 27 2020</p>
      </div>

      <div className="cert-item">
        <div className="img-container">
          <img src={ml} />
        </div>
        <strong>
          <p>Machine Learning</p>
        </strong>
        <p>March 7 2020</p>
      </div>

      <div className="cert-item">
        <div className="img-container">
          <img src={robotics} />
        </div>
        <strong>
          <p>Robotics Technology</p>
        </strong>
        <p>March 7 2020</p>
      </div>

      <div className="cert-item">
        <div className="img-container">
          <img src={preimmersion} />
        </div>
        <strong>
          <p>Senior High Scholl Pre Immersion Seminar</p>
        </strong>
        <p>October 13-14 2017</p>
      </div>

      <div className="cert-item">
        <div className="img-container">
          <img src={ama} />
        </div>
        <strong>
          <p>14 weeks Office Productivity and Multimedia Training</p>
        </strong>
        <p>December 22, 2014 - March 22, 2015</p>
      </div>
    </section>
  );
}

export default CertsComp;
