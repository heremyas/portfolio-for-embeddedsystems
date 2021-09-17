import React from "react";
import CertsComp from "../components/CertsComp";
import "./Certs.css"

function Certs() {
  return (
    <div id="certificates" className="About mainContainer about">
      <CertsComp />
      <section className="forthRight">
        <div className="box">
          <h1 className="myAbout">
            Certificates/<br></br>Webinars
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Certs;
