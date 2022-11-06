import React from 'react';
import { Link } from "react-router-dom";
import Chipotle from '../images/chipotle_logo_small.png'


export class Takeout extends React.Component {
  render() {
    return (
      <img src={Chipotle} className="chipotle-logo" alt="#" />
      // <button> </button>
      //   https://locations.chipotle.com/nj/paramus/81-e-state-rt-4?utm_source=google&utm_medium=yext&utm_campaign=yext_listings
    );
  }
}