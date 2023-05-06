import React from "react";
import Takeout from "../components/Takeout";
import BagIcon from "../images/food_delivery_icon.png";
import CalIcon from "../images/calendar_icon_white.png";
import { Link } from 'react-router-dom';
import Calendar from "./Calendar";


const CalButton = () => {
  return (
    <div className="button-container">
    <button className="cal-button home-buttons">
       <Link className="but-link" to="calendar" rel="noreferrer" element = {<Calendar />}>
       <img className="calendar-icon" src={CalIcon} alt="calendar icon" /> <span className="text-on-button">MAY</span>
       </Link>
      </button>
      </div>
  );
}

export default CalButton;
