import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="menu">
      <a href="#homePage">
        <div className="odd">Home</div>
      </a>

      <a href="#secondPage">
        <div className="even">About</div>
      </a>

      <a href="#education">
        <div className="odd">Education</div>
      </a>

      <a href="#certificates">
        <div className="even">Certs</div>
      </a>
    </div>
  );
}

export default Nav;
