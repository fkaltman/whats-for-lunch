import React from "react";
import Header from "./Header";
import Lunch from "../components/Lunch";
import LunchDeets from "../components/LunchDeets";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <section className="home-screen home-screen-frame">
      <Header />
    <div className="talk-bubble talk-bubble1 tri-right round left-in">
    <p>Hey, what's for lunch?</p>
      </div>
      <div class="talk-bubble talk-bubble2 tri-right round right-in">
        <section className="lunch-today"><Lunch /></section>
      </div>
      <div class="talk-bubble talk-bubble3 tri-right round right-in">
        <section className="lunch-today"><LunchDeets /></section>
      </div>
      <Footer />
    </section>
  );
}


export default Home;
