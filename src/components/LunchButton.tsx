import React from "react";
import Swal from "sweetalert2";
import { showAlerts } from "../services/Meals";

const LunchButton: React.FC = () => {
  const dateNum: number = new Date().getDate();

  // doesnt make date a function
  // let date = () => { new Date().getDate() };

  // SAME
  // console.log(nd.getDate());
  // console.log(dateNum);

  // WHY IS THE ABOVE LINE NOT THE SAME AS console.log(date) or console.log(date()) ???
  // console.log(date)
  // console.log(date())

  // const todaysAlert = dateNum === 4 ? console.log("nine") : console.log("nope");

  return (
    <div className="button-container">
      <button
        onClick={() => Swal.fire(showAlerts[dateNum])}
        className="todays-button home-buttons days"
      >
        TODAY'S LUNCH
      </button>
    </div>
  );
};

export default LunchButton;
