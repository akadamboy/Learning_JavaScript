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
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  [`day-${2 + 2}`]: {
    open: 11,
    close: 23,
  },

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
};
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
  orderPizza: function (mainIngredient, ...addOns) {
    console.log(mainIngredient);
    console.log(addOns);
  },

  //before ES6
  // openingHours: openingHours,

  //ES6 enhanced object literals
  openingHours,

  // new method syntax in objects ES6 . no need to use function keyword
  orderNoodles(mainIngredient, ...addOns) {
    console.log(mainIngredient);
    console.log(addOns);
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

const { name, openingHours1, starterMenu } = restaurant;

console.log(name, openingHours1, starterMenu);

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

//-------------------------------------------------//

//---- Rest Pattern AND PARAMETERS----//
//--------------------------------//

//.     spread expands things
//.     rest compress things

console.log("-------------Rest Pattern AND PARAMETERS----//");

const restarr = [1, 2, ...[3, 4]]; // spread becauseon ... is on the left hand of assignment

console.log(restarr);

const [a1, b1, ...others] = [1, 2, 3, 4, 5]; // using the rest.  Rest should come as the last element
console.log(a1, b1, others);

const add = function (...numbers) {
  // RESTING
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 4, 5, 6);

add(5, 6, 2, 3, 4, 5, 6, 7, 8, 9);

const x = [23, 45, 26, 23, 27];

add(...x); // SPREADING

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

restaurant.orderPizza("mushrooms");

//--------------------------------------------------------------------------//

// Short Circuiting (&& and ||)//
//--------------------------------//

console.log("-------------Short Circuiting (&& and ||)----//");

// || operator will return the first truthy value it encounters
// if all values are falsy it will return the last value

console.log(3 || "stephen");
console.log("" || "stephen");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "hello" || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// restaurant.numGuests = 23;

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// && operator will return the first falsy value it encounters
// if all values are truthy it will return the last value

console.log("-------------AND operator----//");

console.log(0 && "stephen");
console.log(7 && "stephen");
console.log("hello" && 23 && null && "stephen");
console.log("hello" && 23 && true && "stephen");

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
// this will work only if orderPizza exists

//--------------------------------------------------------------------------//

// The Nullish Coalescing Operator (??)//
//--------------------------------//

console.log("-------------Nullish Coalescing Operator (??)----//");

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3); // it will print 10 because 0 is a falsy value

const guests4 = restaurant.numGuests ?? 10;
console.log(guests4); // it will print 0 because nullish values are only null and undefined

//--------------------------------------------------------------------------//

// Logical Assignment Operators //
//--------------------------------//

console.log("-------------Logical Assignment Operators----//");

const rest1 = {
  name: "capri",
  numGuests: 20,
};

const rest2 = {
  name: "la piazza",
  owner: "jhon",
};

// OR assignment operator.  assign value if the current value is falsy
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator.  assign value if the current value is truthy
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

/////-----------for of loop------------------////
console.log("-------------for of loop----//");

const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of allMenu) {
  console.log(item);
}

console.log(`entries funciton`);
console.log(
  ` it is an array iterator,,,, we will get an array with the index and the actual data`
);
console.log([...allMenu.entries()]);

for (const item of allMenu.entries()) {
  console.log(item);
}

for (const [i, item] of allMenu.entries()) {
  console.log(`${i + 1}: ${item}`);
}
