import React from "react";


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
      <button
        // onClick={() => Swal.fire(showAlerts[dateNum])}
        className="todays-button home-buttons days"
      >
        {/* TODAY'S LUNCH */}
        brb
      </button>
    </div>
  );
};

export default LunchButton;