import React from "react";
import { Link } from "react-router-dom";
import Showroom from "../images/small_yellow_showroom_icon.png";

const HomeShowroom: React.FC = () => {
  return (
    <div className="bottom-buttons2">
      <Link to="/" rel="noreferrer">
        <img className="showroom-icon" src={Showroom} alt="showroom icon" />
      </Link>
    </div>
  );
};

export default HomeShowroom;
