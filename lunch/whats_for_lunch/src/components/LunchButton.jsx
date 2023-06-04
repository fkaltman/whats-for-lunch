import React from "react";
import Swal from "sweetalert2";
import { showAlerts } from "../services/Meals.js";

console.log(showAlerts)

const LunchButton = () => {

  const dateNum = (new Date().getDate());

  // doesnt make date a function
  // let date = () => { new Date().getDate() };
  
  let nd = new Date;

  const date = () => { nd.getDate() };

  // SAME
  // console.log(nd.getDate());
  // console.log(dateNum);

// WHY IS THE ABOVE LINE NOT THE SAME AS console.log(date) or console.log(date()) ???
  // console.log(date)
  // console.log(date())

  const todaysAlert = dateNum === 4 ? console.log('nine') : console.log('nope');

  // const todaysAlert = date === 19 ? Swal.fire({
  //   title: 'Cape Cod Salad',
  //   html: '',
  //   footer: "Wednesday, May 31<sub>st</sub>"
  // }) : console.log('nope')

 
  // let todaysAlert = (date) => {(`showAlert + ${date}`)()};
  // let todaysAlert = () => { date };

    return (
      // <div className="button-container">
      //   <button onClick={{ todaysAlert }} className= "todays-button home-buttons days hover-day"><span class="date-container">{dateNum}</span>TODAY'S LUNCH</button>
      // </div>

      <div className="button-container">
        <button onClick={() => Swal.fire({
      title: 'Turning Point',
      html: '',
      footer: "Monday, May 8<sub>th</sub"
    })} className= "todays-button home-buttons days hover-day"><span class="date-container">{dateNum}</span>TODAY'S LUNCH</button>
      </div>
    );
  
  //   <div className="button-container">
  //   <button onClick={() => Swal.fire({ showAlerts[1].title, showAlerts[1].footer })} className= "todays-button home-buttons days hover-day"><span class="date-container">{dateNum}</span>TODAY'S LUNCH</button>
  // </div>
  }


export default LunchButton;


   
  