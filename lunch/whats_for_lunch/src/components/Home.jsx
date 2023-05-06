import React from "react";
import Header from "./Header";
import LunchButton from "../components/LunchButton";
import TakeoutButton from "../components/TakeoutButton";
import CalButton from "../components/CalButton";
import BagIcon from "../images/food_delivery_icon.png";
// import Footer from "../components/Footer";


const Home = () => {

  return (
    <>
      <Header />
    <section className="main-buttons">
      <LunchButton />
      <CalButton />
      <TakeoutButton />
      {/* <Footer /> */}
    </section>
    </>
  );
}


export default Home;
