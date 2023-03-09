import React from 'react'
import { Link } from 'react-router-dom';
import Envelope from "../images/envelope.png";
import Home from "./Home";
import Email from './Email';

const Footer2 = () => {
  return (
      <div className="bottom-buttons2">
        <Link to="/" rel="noreferrer" element={<Home />}>
          <div className="arrow"> &larr; </div>
        </Link>
        <Link to="/contact" rel="noreferrer" element ={<Email />}>
          <img className="envelope-icon" src={Envelope} alt="envelope icon"/>
        </Link>
      </div>
  );
}

export default Footer2;