import React from "react";

class Meal {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

let meals = [];
 

const meal1 = new Meal("Blackened Chicken", "");
const meal2 = new Meal("Shrimp Scampi", "");
const meal3 = new Meal("Paninis", "");
const meal4 = new Meal("Red Robin", "");
const meal5 = new Meal("Taco Bar", "");

const meal8 = new Meal("Turning Point", "");
const meal9 = new Meal("Panko Chicken", "");
const meal10 = new Meal("Penne Vodka & Sausage", "");
const meal11 = new Meal("Chicken Cordon Bleu", "");
const meal12 = new Meal("Chicken Parmesan", "");

// const meal13 = new Meal("Cape Cod Salad", "");
// const meal14 = new Meal("Jerk Chicken", "");
const meal15 = new Meal("Jerk Chicken", "");
const meal16 = new Meal("Baja Salad'", "");
const meal17 = new Meal("Chicken Marsala", "");
const meal18 = new Meal("Taquitos & Rice", "");
const meal19 = new Meal("Chick-Fil-A", "");

// const meal20 = new Meal("Chili Bar", "");
// const meal21 = new Meal("Fish & Chips", "");
const meal22 = new Meal("Sandwich Day", "");
const meal23 = new Meal("Cobb Salad", "");
const meal24 = new Meal("Chicken Quesadillas", "");
const meal25 = new Meal("Grilled Salmon", "");
const meal26 = new Meal("Wings, Fries, & Salad", "");

// const meal27 = new Meal("Meatball Parm", "");
// const meal28 = new Meal("Chicken Souvlaki", "");
const meal29 = new Meal("It's a holiday", "");
const meal30 = new Meal("Corn Flaky Chicken", "");
const meal31 = new Meal("Baked Ziti & Meatballs", "");

const mealZero = new Meal("It's the weekend", "...get ur own food")
// const holiday = new Meal("It's a holiday", "...get ur own food")

meals = [meal3, meal4, meal5, meal6, holiday, mealZero, mealZero, meal10, meal11, meal12, meal13, meal14, mealZero, mealZero, meal17, meal18, meal19, meal20, meal21, mealZero, mealZero, meal24, meal25, meal26, meal27, meal28, mealZero, mealZero];


const Lunch = () => {
  const date = (new Date().getDate());
  
  return (
    <>
      {/* <div className="talk-bubble talk-bubble1 tri-right round left-in">
        <p>Hey, what's for lunch?</p>
      </div>
      <div class="talk-bubble talk-bubble2 tri-right round right-in">
        <section className="lunch-today">{meals[date-3].name}</section>
      </div> */}
    </>
  );

}
export default Lunch;
