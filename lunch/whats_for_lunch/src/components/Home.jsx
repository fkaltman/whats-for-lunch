import React from "react";
// import BagIcon from "../images/food_delivery_icon.png";
// import CalIcon from "../images/calendar_icon.png";
import Lunch from "../components/Lunch";
import LunchDeets from "../components/LunchDeets";
import Footer from "../components/Footer";
// import Calendar from "../components/Calendar";
// import Takeout from "../components/Takeout";
// import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <div className="talk-bubble talk-bubble1 tri-right round left-in">
    <p>Hey, what's for lunch?</p>
      </div>
      <div class="talk-bubble talk-bubble2 tri-right round right-in">
        <section className="lunch-today"><Lunch /></section>
        {/* <section className="lunch-today"></section> */}
      </div>
      <div class="talk-bubble talk-bubble3 tri-right round right-in">
        <section className="lunch-today"><LunchDeets /></section>
        {/* <section className="lunch-today"></section> */}
      </div>
      <Footer />
    </>
  );
}


export default Home;
