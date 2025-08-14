import React from "react";
import { Link } from "react-router-dom";

const CalButton: React.FC = () => {
  return (
    <div className="button-container">
      <button className="cal-button home-buttons">
        <Link className="but-link" to="calendar" rel="noreferrer">
          {/* <img className="calendar-icon" src={CalIcon} alt="calendar icon" /> */}
          <span className="text-on-button">JULY LUNCHES</span>
        </Link>
      </button>
    </div>
  );
};

export default CalButton;
