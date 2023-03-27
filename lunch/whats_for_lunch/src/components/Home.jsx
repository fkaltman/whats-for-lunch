import React from "react";
import Header from "./Header";
import Lunch from "../components/Lunch";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <section className="home-screen home-screen-frame">
      <Header />
      <Lunch />
      <Footer />
    </section>
  );
}


export default Home;
