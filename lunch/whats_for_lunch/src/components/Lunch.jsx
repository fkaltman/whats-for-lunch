import React from "react";

const meals = [
  {
    "mealId": 1,
    "mealDate": "December 5th",
    "mealName": "Bombay Hut"
  },
  {
    "mealId": 2,
    "mealDate": "#",
    "mealName": "Panera"
  },
  {
    "mealId": 3,
    "mealDate": "#",
    "mealName": "Caprese Salad"
  },
  {
    "mealId": 4,
    "mealDate": "#",
    "mealName": "Chicken Masala"
  },
  {
    "mealId": 5,
    "mealDate": "#",
    "mealName": "Panini Sandwiches"
  }
];


export default function Lunch() {
  
  const found = meals.find(obj => {
    return obj.mealId === 1;
  });

  return (
    
      <div className="today-card">
        {/* <p className ="date">It's {found.mealDate}.</p> */}
        <p className ="meal-name">{found.mealName}</p>
      </div>
   
  );

  //     meals.map(
  //       (({ mealDate, mealName }) => ${mealDate}: ${mealName}
  //       )
  //     )
  
  //   return(<p>`Today is ${mealDate}: ${mealName}.`</p>)
  // }

 
}

