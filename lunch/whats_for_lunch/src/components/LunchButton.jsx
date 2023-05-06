import React from "react";
import Swal from "sweetalert2";

const LunchButton = () => {

  const date = (new Date().getDate());

  const showAlert1 = () => {
    Swal.fire({
      title: 'Blackened Chicken',
      html: '',
      footer: "Monday, May 1<sub>st</sub>"
    })
  }
  
  const showAlert2 = () => {
    Swal.fire({
      title: 'Shrimp Scampi',
      html: '',
      footer: "Tuesday, May 2<sub>nd<sub>"
    })
  }
  
  const showAlert3 = () => {
    Swal.fire({
      title: 'Paninis',
      html: '',
      footer: "Wednesday, May 3<sub>rd</sub>"
    })
  }
  
  const showAlert4 = () => {
    Swal.fire({
      title: 'Red Robin',
      html: '',
      footer: "Thursday, May 4<sub>th</sub"
    })
  }
  
  const showAlert5 = () => {
    Swal.fire({
      title: 'Panko Chicken',
      html: '',
      footer: "Friday, May 5<sub>th</sub"
    })
  }
  
  const showAlert6 = () => {
    Swal.fire({
      title: 'Turning Point',
      html: '',
      footer: "Monday, May 8<sub>th</sub"
    })
  }
  
  const showAlert7 = () => {
    Swal.fire({
      title: 'Taco Bar',
      html: '',
      footer: "Tuesday, May 9<sub>th</sub>"
    })
  }
  
  const showAlert8 = () => {
    Swal.fire({
      title: 'Penne Vodka & Sausage',
      html: '',
      footer: "Wednesday, May 10<sub>th</sub>"
    })
  }
  
  const showAlert9 = () => {
    Swal.fire({
      title: 'Chicken Cordon Bleu',
      html: '',
      footer: "Thursday, May 11<sub>th</sub>"
    })
  }
  
  const showAlert10 = () => {
    Swal.fire({
      title: 'Teriyaki Salmon',
      html: '',
      footer: "Friday, May 12<sub>th</sub>"
    })
  }
  
  const showAlert11 = () => {
    Swal.fire({
      title: 'Jerk Chicken',
      html: '',
      footer: "Monday, May 15<sub>th</sub>"
    })
  }
  
  const showAlert12 = () => {
    Swal.fire({
      title: 'Baja Salad',
      html: '',
      footer: "Tuesday, May 16<sub>th</sub>"
    })
  }
  
  const showAlert13 = () => {
    Swal.fire({
      title: 'Chicken Marsala',
      html: '',
      footer: "Wednesday, May 17<sub>th</sub>"
    })
  }
  
  const showAlert14 = () => {
    Swal.fire({
      title: 'Taquitos & Rice',
      html: '',
      footer: "Thursday, May 18<sub>th</sub>"
    })
  }
  
  const showAlert15 = () => {
    Swal.fire({
      title: 'Chick-Fil-A',
      html: '',
      footer: "Friday, May 19<sub>th</sub>"
    })
  }
  
  const showAlert16 = () => {
    Swal.fire({
      title: 'Sandwich Day',
      html: '',
      footer: "Monday, May 22<sub>th</sub>"
    })
  }
  
  const showAlert17 = () => {
    Swal.fire({
      title: 'Cobb Salad',
      html: '',
      footer: "Tuesday, May 23<sub>nd</sub>"
    })
  }
  
  const showAlert18 = () => {
    Swal.fire({
      title: 'Chicken Quesadillas',
      html: '',
      footer: "Wednesday, May 24<sub>th</sub>"
    })
  }
  
  const showAlert19 = () => {
    Swal.fire({
      title: 'Grilled Salmon',
      html: '',
      footer: "Thursday, May 25<sub>th</sub>"
    })
  }
  
  const showAlert20 = () => {
    Swal.fire({
      title: 'Wings, Fries, & Salad',
      html: '',
      footer: "Friday, May 26<sub>th</sub>"
    })
  }
  
  const showAlert21 = () => {
    Swal.fire({
      title: 'Corn Flaky Chicken',
      html: '',
      footer: "Wednesday, May 29<sub>th</sub>"
    })
  }
  
  const showAlert22 = () => {
    Swal.fire({
      title: 'Baked Ziti & Meatballs',
      html: '',
      footer: "Thursday, May 31<sub>th</sub>"
    })
  }
  
  const showAlert23 = () => {
    Swal.fire({
      title: 'Cape Cod Salad',
      html: '',
      footer: "Wednesday, May 31<sub>st</sub>"
    })
  }

    return (
      // <div className="button-container">
      //   <button onClick={showAlert1} className={`todays-button home-buttons days hover-day ${date === 3 ? 'red' : 'black'}`} id='day3'><span class="date-container">{date}</span>TODAY'S LUNCH</button>
      // </div>
      <div className="button-container">
        <button onClick = {`showAlert(date)`} className= "todays-button home-buttons days hover-day"><span class="date-container">{date}</span>TODAY'S LUNCH</button>
      </div>
    );
  }


export default LunchButton;