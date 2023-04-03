import React from "react";

class Meal {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

let meals = [];
 
// const meal1 = new Meal("Chicken cutlets", "gravy deets");
// const meal2 = new Meal("Wing stop", "wing deets");
const meal3 = new Meal("Chicken Francaise", "");
const meal4 = new Meal("Baja Salad", "");
const meal5 = new Meal("Roast Beef", "");
const meal6 = new Meal("Panko Chicken", "");
// const meal9 = new Meal("BBQ chicken sandwich", "BBQ deets");
const meal10 = new Meal("Grilled Lemon Chicken", "");
const meal11 = new Meal("Grilled Salmon", "");
const meal12 = new Meal("Chicken Parmesan", "");
const meal13 = new Meal("Cape Cod Salad", "");
const meal14 = new Meal("Jerk CHicken", "");
// const meal15 = new Meal("Chicken marsala", "Marsala deets");
// const meal16 = new Meal("Sloppy joes", "Sloppy deets");
const meal17 = new Meal("Sandwich Day", "");
const meal18 = new Meal("Meatball Stuffed Shells", "");
const meal19 = new Meal("Meatball Lasagne", "");
const meal20 = new Meal("Chili Bar", "");
const meal21 = new Meal("Fish & Chips", "");
// const meal22 = new Meal("Chicken quesadillas", "Quesadilla deets");
// const meal23 = new Meal("Cheese ravilois", "Bombay deets");
const meal24 = new Meal("Chicken Cutlet", "");
const meal25 = new Meal("Corn flake crusted chicken", "");
const meal26 = new Meal("BBQ ribs", "");
const meal27 = new Meal("Meatball Parm", "");
const meal28 = new Meal("Chicken Souvlaki", "");
// const meal29 = new Meal("Paninis", "Panini deets");
// const meal30 = new Meal("Chicken tortilla soup", "Soup deets");
// const meal31 = new Meal("The Halal Guys", "");
const mealZero = new Meal("It's the weekend", "...get ur own food")
const holiday = new Meal("It's a holiday", "...get ur own food")

meals = [meal3, meal4, meal5, meal6, holiday, mealZero, mealZero, meal10, meal11, meal12, meal13, meal14, mealZero, mealZero, meal17, meal18, meal19, meal20, meal21, mealZero, mealZero, meal24, meal25, meal26, meal27, meal28, mealZero, mealZero];


const Lunch = () => {
  const date = (new Date().getDate());
  
  return (
    <>
      <div className="talk-bubble talk-bubble1 tri-right round left-in">
        <p>Hey, what's for lunch?</p>
      </div>
      <div class="talk-bubble talk-bubble2 tri-right round right-in">
        <section className="lunch-today">{meals[date-3].name}</section>
      </div>
      {/* <div class="talk-bubble talk-bubble3 tri-right round right-in">
    <section className="lunch-today">{meals[23].description}</section>
  </div> */}
     
    </>
  );

}
export default Lunch;
