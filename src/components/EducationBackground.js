import React from "react";
import "./EducationBackground.css";

function EducationBackground() {
  return (
    <div>
      <div className="school_item_container">
        <div className="school_logo_container">
          <img src="https://dhvsu.edu.ph/images/banners/dhvsu.png" />
        </div>
        <div style={{ textAlign: "center", padding: "10px" }}>
          <strong>
            <p>Don Honorio Ventura State University</p>
          </strong>
          <p>BACHELOR OF SCIENCE IN COMPUTER ENGINEERING</p>
          <p>2018 - Present</p>
        </div>
      </div>

      <div className="school_item_container">
        <div className="school_logo_container">
          <img src="https://pbs.twimg.com/profile_images/500149154513813504/ZhCXTIWB_400x400.png" />
        </div>
        <div style={{ textAlign: "center", padding: "10px" }}>
          <strong>
            <p>Systems Plus College Foundation</p>
          </strong>
          <p>INFORMATION AND COMMUNICATION TECHNOLOGY</p>
          <p>2016 - 2018</p>
        </div>
      </div>

      <div className="school_item_container">
        <div className="school_logo_container">
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div style={{ textAlign: "center", width: "100%"}}>
          <strong>
            <p>Pulung Santol National High School</p>
          </strong>
          <p>Junior High School</p>
          <p>2012 - 2016</p>
          <br></br>
          <strong>
            <p>Pulung Santol Elementary School</p>
          </strong>
          <p>Elementary</p>
          <p>2006 - 2012</p>
        </div>
      </div>
    </div>
  );
}

export default EducationBackground;