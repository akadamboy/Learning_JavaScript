"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (mainDishIndex, sideDishIndex) {
    return [this.mainMenu[mainDishIndex], this.starterMenu[sideDishIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//ARRAY DESTRUCTURING//

// const arr = [1, 2, 3, 4, 5];

// const [a, b, c] = arr;
// console.log(a, b, c);

// let [first, , third] = restaurant.categories;
// console.log(first, third);

// [first, third] = [third, first];
// console.log(first, third);
// let [maindish, starter] = restaurant.order(2, 3);

// // nested destructuring
// //-----------------------//
// console.log(restaurant.order(1, 2));
// console.log(maindish, starter);

// const nested = [2, 3, [5, 6, 7]];

// const [i, , j] = nested;
// console.log(i, j);

// const [x, , [y, z, n]] = nested;
// console.log(x, y, z, n);

// // default values
// //-----------------------//

// const arr1 = [2, 5];
// const [p = 1, q = 2, r = 3] = arr1;

// console.log(p, q, r);

//-----destructuring objects------//
//-----------------------//

//-------------here we have to use the same name as in the object

const { name, openingHours, starterMenu } = restaurant;

console.log(name, openingHours, starterMenu);

///--------------------using different varuable name than object name--------------------//

const {
  name: restaurantName,
  location: restLocation,
  starterMenu: menu,
} = restaurant;

console.log(restLocation, restLocation, menu);
