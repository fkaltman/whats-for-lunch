import React from "react";
import BagIcon from "../images/food_delivery_icon.png";
import CalIcon from "../images/calendar_icon.png";
import Lunch from "../components/Lunch";
import Calendar from "../components/Calendar";
import Takeout from "../components/Takeout";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <div className="talk-bubble tri-right round left-in">
    <p>Hey, what's for lunch?</p>
      </div>
      <div class="talk-bubble2 tri-right round right-in">
        <section className="lunch-today"><Lunch /></section>
        {/* <section className="lunch-today"></section> */}
      </div>
      
      <div className="bottom-buttons">
        <Link to="calendar" rel="noreferrer" element ={<Calendar />}>
          <img className="shopping-bag" src={CalIcon} alt="calendar icon" />
        </Link>
        <Link to="takeout" rel="noreferrer" element ={<Takeout />}>
          <img className="shopping-bag" src={BagIcon} alt="take out icon"/>
        </Link>
      </div>
    </>
  );
}


export default Home;
