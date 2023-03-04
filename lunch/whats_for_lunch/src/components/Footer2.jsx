import React from 'react'
// import Envelope from "../images/#"
import { Link } from 'react-router-dom';
import Home from "../components/Home";

const Footer2 = () => {
  return (
    <>
      <div className="bottom-buttons2">
        <Link to="/" rel="noreferrer" element={<Home />}>
          <div className="arrow-icon"> &larr; </div>
        </Link>
        {/* <Link to="takeout" rel="noreferrer" element ={<Takeout />}>
          <img className="bag-icon" src={BagIcon} alt="take out icon"/>
        </Link> */}
      </div>
    </>
  );
}

export default Footer2;