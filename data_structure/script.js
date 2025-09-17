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

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  orderDelivery: function ({ mainDishIndex, sideDishIndex, time, tableNum }) {
    console.log(
      `order received for table number ${tableNum} at ${time} o'clock are ${this.mainMenu[mainDishIndex]} and ${this.mainMenu[sideDishIndex]}`
    );
  },

  orderPasta: function name(ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1} ,${ing2} and ${ing3}`);
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

const restaurant2 = {
  owner: "jhon",
  place: "kerala",
  ...restaurant,
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

//=---- Mutating variables while destructuring----=//
//--------------------------------//

let a = 111;
let b = 123;
const obj = { a: 2, b: 8, c: 15 };
// {a,b} = obj ; ---> this will throw error. seeing {}  javascript will expect a code block
({ a, b } = obj);

console.log(a, b);

///--------------NESTED OBJECTS--------------//

const { fri } = openingHours;
console.log(fri);

const {
  thu: { open, close },
} = openingHours;

console.log(open, close);

// giving different variable names

const {
  thu: { open: o, close: c },
} = openingHours;

console.log(o, c);

restaurant.orderDelivery({
  time: "2:00",
  tableNum: 1,
  mainDishIndex: 2,
  sideDishIndex: 1,
});

///-------------SPREAD OPERATOR--------------///

// we can use spread operator to expand an array into all its elements  or to combine multiple arrays into one array

console.log(`----------spread operator------`);

const values = [7, 8, 9];

const spreadArray = [1, 3, 3, ...values];

console.log(spreadArray); //--- print array as it is

console.log(...spreadArray); // -- print elements of array separately

//---spread on strings----///

//-----  SPREAD only work to make arrays and if passed into a funciton----//

const name1 = "stephen";

const letters = [...name1]; //. making array
console.log(letters);

console.log(...name1); //  passing to log function

// console.log(`letters are ${...name1}`)   ---> this will not work

console.log("----------preparing pasta----------");

const ingredients = [
  prompt("enter pasta ingredient 1"),
  prompt("enter pasta ingredient 2"),
  prompt("enter pasta ingredient 3"),
];

console.log("----------passing using normal way----------");

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

console.log("----------passing using spread operator way----------");

restaurant.orderPasta(...ingredients);

console.log("----------spreading objects----------");

console.log("---original restaurent");
console.log(restaurant);

console.log("---after spreading");
console.log(restaurant2);
