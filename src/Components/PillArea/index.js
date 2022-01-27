import React from "react";
import searchIcon from "../../assets/icons/search-icon.png";
import "./pillarea.css";

const PillArea = () => {
  return (
    <div className="pillArea">
      <div className="pillArea__content">
        <p>
          <small>
            <strong>Location</strong>
          </small>
        </p>
        <p>
          <small>Area to find medication</small>
        </p>
      </div>
      <div className="pillArea__content">
        <p>
          <small>
            <strong>Medication Name</strong>
          </small>
        </p>
        <p>
          <small>Area to find medication</small>
        </p>
      </div>
      <div className="pillArea__content">
        <p>
          <small>
            <strong>Contact</strong>
          </small>
        </p>
        <p>
          <small>Area to find medication</small>
        </p>
      </div>
      <img className="searchIcon" src={searchIcon} alt="" />
    </div>
  );
};

export default PillArea;
