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

      <a href="#projects">
        <div className="odd">Projects</div>
      </a>
    </div>
  );
}

export default Nav;
