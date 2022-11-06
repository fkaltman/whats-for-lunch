import React from "react";
import Bag from "../images/food_delivery_icon.png";
import Calendar from "../images/calendar_icon.png";
import Lunch from "../components/Lunch";

export default function Home() {
  return (
    <div className="home">
      <h1 className="wfl-title">What's for lunch?</h1>
      <section className="lunch-today"><Lunch /></section>
      <div className="bottom-buttons">
      <img className="shopping-bag" src={Bag} />
      <img className="calendar" src={Calendar} />
      </div>
    </div>
  );
}

