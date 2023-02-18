import React from "react";
import Bag from "../images/food_delivery_icon.png";
import Calendar from "../images/calendar_icon.png";
import Lunch from "../components/Lunch";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <div className="talk-bubble tri-right round left-in">
    <p>Hey, what's for lunch?</p>
      </div>
      <div class="talk-bubble2 tri-right round right-in">
        <section className="lunch-today"><Lunch /></section>
      </div>
      
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

export default Home;

