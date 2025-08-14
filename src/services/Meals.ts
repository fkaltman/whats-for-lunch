// console.log(Swal.fire({ showAlerts[1].title, showAlerts[1].footer }));
// match the object key to the date

export interface MealAlert {
  title: string;
  text?: string;
  footer: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
}

export interface ShowAlerts {
  [key: number]: MealAlert;
}

export const showAlerts: ShowAlerts = {
  // 1: {
  //   title: "🍔 BBQ 🍔 ",
  //   imageUrl: "https://i.imgur.com/c8qugHI.jpg",
  //   imageWidth: 300,
  //   imageHeight: 230,
  //   imageAlt: "Custom image",
  //   footer: "Friday, September 1st",
  // },
  1: { 
    title: "Grilled Chicken Pasta Salad", 
    text: "with pitas",
    footer: "Monday, July 1st" 
  },
  2: { 
    title: "DIY Salmon BLT Bar", 
    footer: "Tuesday, July 2nd" 
  },
  3: { 
    title: "DIY Salad Bar",
    // text: "🥟🥟🥟🥟🥟",
    footer: "Wednesday, July 3rd" 
  },

  4: { 
    title: "Office closed", 
    text: "🇺🇸🎇🧨",
    footer: "Thursday, July 4th" 
  },

  5: { 
    title: "Baja Chicken Salad", 
    // text: " w/ Ceasar salad",
    footer: "Friday, July 5th" 
  },

  // 6: {
  //   title: "Chicken Wings", 
  //   text: " w/ Mac & Cheese",
  //   footer: "Thursday, July 6th",
  // },
  
  // 7: {
  //   title: "🍔 BBQ 🍔 ",
  //   imageUrl: "https://i.imgur.com/c8qugHI.jpg",
  //   imageWidth: 300,
  //   imageHeight: 230,
  //   imageAlt: "Custom image",
  //   footer: "Friday, July 7th",
  // },

  8: {
    title: "DIY Bowls",
    // text: "choose shrimp or chicken",
    footer: "Monday, July 8th",
  },

  9: {
    title: "PF Chang's",
    // text: "",
    footer: "Tuesday, July 9th",
  },

  10: {
    title: "DIY Sandwiches",
    // text: "w/rice & tomato salad",
    footer: "Wednesday, July 10th",
  },
  
  11: {
    title: "Lemon Pepper Shrimp",
      // text: "w/ rice & green beans",
    footer: "Thursday, July 11th",
  },
  
  12: {
    title: "Grilled Chicken",
    text: "Ratatouille",
    footer: "Friday, July 12th",
  },

  // 13: {
  //   title: "Cali Burger Bar",
  //   // text: "Mac & Cheese w/ broccoli",
  //   footer: "Thursday, July 13th",
  // },
  
  // 14: {
  //   title: "Low Country Boil",
  //   text: "w/ mashed taters & veggies",
  //   footer: "Friday, July 14th",
  // },

  15: {
    title: "Panko Chicken",
    text: "w/rice and veggies",
    footer: "Monday, July 15th",
  },

  16: {
    title: "Taco Bar",
    text: "🌮🌮🌮",
    footer: "Tuesday, July 16th",
  },

  17: {
    title: "Salad Bar",
    // text: "w/sour cream and salad",
    footer: "Wednesday, July 17th",
  },

  18: {
    title: "Cali Burger Bar",
    // text: "w/ salad & garlic bread",
    footer: "Thursday, July 18th",
  },

  19: {
    title: "Latin Picadillo",
    text: "w/ rice & salad",
    footer: "Friday, July 19th"
  },

  // 20: {
  //   title: "Assorted Paninis",
  //   text: "w/ salads",
  //   footer: "Thursday, July 20th"
  // },
  
  // 21: {
  //   title: "Burrito Bar",
  //   footer: "Friday, July 21th",
  // },
  
  22: {
    title: "Blackened Chicken",
    text: "w/ veggies",
    footer: "Monday, July 22nd",
  },
  
  23: {
    title: "Penne Vodka with Chicken",
    text: "w/ Ceaser salad",
    footer: "Tuesday, July 23th",
  },
  
  24: {
    title: "DIY Sandwich Day",
    text: "Italian Pasta Salad",
    footer: "Wednesday, July 24nd",
  },

  25: {
    title: "Flank Steak Salad",
    // text: "w/ rice & veg",
    footer: "Thursday, July 25th",
  },
  
  26: {
    title: "🍔 BBQ 🍔 ",
    imageUrl: "https://i.imgur.com/c8qugHI.jpg",
    imageWidth: 300,
    imageHeight: 230,
    imageAlt: "Custom image",
    footer: "Friday, July 26th"
  },

  // 27: {
  //   title: "Shrimp Skewers",
  //   text: "w/veg fried rice",
  //   footer: "Thursday, July 27th",
  // },

  // 28: {
  //   title: "🍔 BBQ 🍔 ",
  //   imageUrl: "https://i.imgur.com/c8qugHI.jpg",
  //   imageWidth: 300,
  //   imageHeight: 230,
  //   imageAlt: "Custom image",
  //   footer: "Friday, July 28th",
  // },
  
  29: {
    title: "Honey Lime Chicken Chili Bowls",
      // text: "w/ mac and cheese broccoli",
    footer: "Monday, July 29th",
  },

  30: {
    title: "El Gordo",
    // title: "Chicken Cordon Bleu",
    footer: "Tuesday, July 30th",
  },

  31: {
    title: "DIY Salad Bar",
    footer: "Wednesday, July 31st"
  }

  // 31: {
  //   title: "🍔 BBQ 🍔 ",
  //   imageUrl: "https://i.imgur.com/c8qugHI.jpg",
  //   imageWidth: 300,
  //   imageHeight: 230,
  //   footer: "Friday, July 31st"
  // }

  // title: "🍔 BBQ 🍔 ",
  //   imageUrl: "https://i.imgur.com/c8qugHI.jpg",
  //   imageWidth: 300,
  //   imageHeight: 230,
  //   imageAlt: "Custom image",
  //   footer: "Friday, September 1st",

  // 28: { title: "🍔 BBQ 🍔 ", imageUrl: '../images/blaze.logo.png',
  //   imageWidth: 400,
  //   imageHeight: 200,
  //   imageAlt: 'Custom image',footer: "Friday, July 28th" },
  // 5: { title: "It's the weekend"}
};
