import React from 'react'
import { Link } from 'react-router-dom';
import Envelope from "../images/envelope.png";
import Showroom from "../images/small_black_showroom70.png";
import Home from "./Home";
import Email from './Email';

const Footer2 = () => {
  return (
      <div className="bottom-buttons2">
        <Link to="/" rel="noreferrer" element={<Home />}>
          <img className="showroom-icon" src={Showroom} alt="showroom icon"/>
          {/* <div className="arrow"> &larr; </div> */}
        </Link>
        {/* <Link to="/contact" rel="noreferrer" element ={<Email />}>
          <img className="envelope-icon" src={Envelope} alt="envelope icon"/>
        </Link> */}
      </div>
  );
}

export default Footer2;