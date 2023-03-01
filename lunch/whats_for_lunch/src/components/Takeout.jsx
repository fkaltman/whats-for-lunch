import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import Bag from "../images/food_delivery_icon.png";
// import Calendar from "../images/calendar_icon.png";
import Chipotle from "../images/chipotle_logo_small.png";


class Takeout extends Component {
  render() {
    return (
      <>
      <Link to="https://chipotle.com/order#menu" rel="noreferrer">
        <img className="chipotle-logo" src={Chipotle} alt="Chipotle icon"></img>
      </Link>
      <Footer />
      </>
    );
  }
}

export default Takeout;