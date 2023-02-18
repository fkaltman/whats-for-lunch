import React from 'react';
import Bag from "../images/food_delivery_icon.png";
import Calendar from "../images/calendar_icon.png";
import { Link } from "react-router-dom";
import Chipotle from '../images/chipotle_logo_small.png'
// import Lunch from "../components/Lunch";


export class Takeout extends React.Component {
  render() {
    return (
      <img src={Chipotle} className="chipotle-logo" alt="#" />
      // <button> </button>
      //   https://locations.chipotle.com/nj/paramus/81-e-state-rt-4?utm_source=google&utm_medium=yext&utm_campaign=yext_listings
    );
  }
}




const Takeout = () => {
  return (
    <>
    {/* <div className="talk-bubble tri-right round left-in">
    <p>Hey, what's for lunch?</p>
      </div>
      <div class="talk-bubble2 tri-right round right-in">
        <section className="lunch-today"><Lunch /></section>
      </div> */}
      
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

export default Takeout;