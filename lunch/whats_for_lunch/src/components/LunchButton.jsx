import React from "react";
import Swal from "sweetalert2";
import { showAlerts } from "../services/Meals.js";

const LunchButton = () => {
  const dateNum = new Date().getDate();

  // doesnt make date a function
  // let date = () => { new Date().getDate() };

  let nd = new Date();

  const date = () => {
    nd.getDate();
  };

  // SAME
  // console.log(nd.getDate());
  // console.log(dateNum);

  // WHY IS THE ABOVE LINE NOT THE SAME AS console.log(date) or console.log(date()) ???
  // console.log(date)
  // console.log(date())

  // const todaysAlert = dateNum === 4 ? console.log("nine") : console.log("nope");

  return (
    <div className="button-container">
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Today's lunch is DIY Salad Bar<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Thanks for your patience  while I <br /> &nbsp;&nbsp;wait for info for the rest of the month
      {/* <button
        onClick={() => Swal.fire(showAlerts[dateNum])}
        className="todays-button home-buttons days"
      >
        TODAY'S LUNCH
      </button> */}
    </div>
  );
};

export default LunchButton;
