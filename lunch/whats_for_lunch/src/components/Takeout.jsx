import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bag from "../images/food_delivery_icon.png";
import Calendar from "../images/calendar_icon.png";
import Chipotle from "../images/chipotle_logo_small.png";


class Takeout extends Component {
  render() {
    return (
      <>
      <Link to="https://chipotle.com/order#menu" rel="noreferrer">
        <img className="chipotle-logo" src={Chipotle} alt="Chipotle icon"></img>
      </Link>
      
      
    <div className="bottom-buttons">
      <Link to="calendar" rel="noreferrer">
        <img className="shopping-bag" src={Calendar} alt="calendar icon"></img>
      </Link>
      <Link to="takeout" rel="noreferrer">
        <img className="shopping-bag" src={Bag} alt="take out icon"></img>
      </Link>
    </div>
      </>
    );
  }
}



export default Takeout;