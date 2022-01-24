import React from "react";
import logoTwo from "../assets/logo2.png";
import rightArrow from "../assets/icons/right-arrow.png";
import smileIcon from "../assets/icons/smile-icon.png";

const Feedback = () => {
  return (
    <div className="feedback">
      <nav className="feedback__nav">
        <img src={logoTwo} alt="" />
        <img src={rightArrow} alt="" />
      </nav>
      <main className="app__wrap feedback__text">
        <img src={smileIcon} alt="" />
        <h2>
          Your query has been received and you will hear from us within the
          hour.
        </h2>
      </main>
    </div>
  );
};

export default Feedback;
