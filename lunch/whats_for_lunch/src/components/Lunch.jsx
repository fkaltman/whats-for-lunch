import React from "react";

class Meal {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

let meals = [];
 
const meal1 = new Meal("Chicken cutlets", "gravy deets");
const meal2 = new Meal("Wing stop", "wing deets");
const meal3 = new Meal("Chicken tortilla soup", "soup deets");
const meal6 = new Meal("Chicken Cordon Bleu", "Cordon bleu deets");
const meal7 = new Meal("Chicken Teriyaki", "Teriyaki deets");
const meal8 = new Meal("Sandwich day", "Sando deets");
const meal9 = new Meal("BBQ chicken sandwich", "BBQ deets");
const meal10 = new Meal("Bombay Hut", "BBQ deets");
const meal13 = new Meal("Chicken parmesan", "Parm deets");
const meal14 = new Meal("Lemon pepper shrimp", "Shrimp deets");
const meal15 = new Meal("Chicken marsala", "Marsala deets");
const meal16 = new Meal("Sloppy joes", "Sloppy deets");
const meal17 = new Meal("Chick-fil-a", "Chick deets");
const meal20 = new Meal("Blackened chicken", "Chicken deets");
const meal21 = new Meal("Swedish meatballs", "Meatball deets");
const meal22 = new Meal("Chicken quesadillas", "Quesadilla deets");
const meal23 = new Meal("Cheese ravilois", "Bombay deets");
const meal24 = new Meal("Pizza & wings", "Pizza deets");
const meal27 = new Meal("It's sandwich day", "Sando deets");
const meal28 = new Meal("Shrimp scampi", "Shrimp deets");
const meal29 = new Meal("Paninis", "Panini deets");
const meal30 = new Meal("Chicken tortilla soup", "Soup deets");
const meal31 = new Meal("The Halal Guys", "");
const mealZero = new Meal("It's the weekend", "...get ur own food")

meals = [meal1, meal2, meal3, mealZero, mealZero, meal6, meal7, meal8, meal9, meal10, mealZero, mealZero, meal13, meal14, meal15, meal16, meal17, mealZero, mealZero, meal20, meal21, meal22, meal23, meal24, mealZero, mealZero, meal27, meal28, meal29, meal30, meal31];


 const Lunch = () => {
  const date = (new Date().getDate());
  
  return (
    <>
    <div className="talk-bubble talk-bubble1 tri-right round left-in">
      <p>Hey, what's for lunch?</p>
    </div>
    <div class="talk-bubble talk-bubble2 tri-right round right-in">
    <section className="lunch-today">{meals[date-1].name}</section>
  </div>
  {/* <div class="talk-bubble talk-bubble3 tri-right round right-in">
    <section className="lunch-today">{meals[23].description}</section>
  </div> */}
     
    </>
  );
}

export default Lunch;
