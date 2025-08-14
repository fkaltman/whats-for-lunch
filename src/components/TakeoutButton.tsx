import React from "react";
import { Link } from "react-router-dom";

const TakeoutButton: React.FC = () => {
  return (
    <div className="button-container">
      <button className="home-buttons takeout-button">
        <Link className="but-link" to="takeout" rel="noreferrer">
          {/* <img className="bag-icon" src={BagIcon} alt="take out icon" /> */}
          <span className="text-on-button">TAKEOUT NEARBY</span>
        </Link>
      </button>
    </div>
  );
};

export default TakeoutButton;
