import React from "react";
// import React, { useState } from "react";


export default function Lunch() {

  var date = (new Date().toString());
  
  return (
    
    //   <div className="today-card">
    //     {/* <p className ="date">It's {found.mealDate}.</p> */}
    //   <p className ="meal-name">Salad</p>
    // </div>
    
    <div className="today-card">
        {/* <p className ="date display-linebreak">It's {found.mealDate}.</p> */}
      <p className="meal-name display-linebreak">{date}</p>
      </div>
  );
}

