//Type conversion Vs Type Coercion//
//-- type conversion is when we do it manually
//-- type coercion is when java script does it automatically

//--- CONVERTING STRING TO NUMBER ---//

const birthYear = "2000"; //string

console.log(birthYear + 18); // out put willbe 200018

// string + number will append the number at the end of string

console.log(Number(2000) + 18); // correct way to add string plus number

//only work if the string contains actuall number

const name = "dude";

console.log(Number(name)); // we get out put -> Nan (Not a Number)
console.log(typeof NaN); // type of Nan is number since its represent invalid number

//--- CONVERTING NUMBER TO STRING

const age = 23;
console.log(String(age) + " is your age");

//-- CONVERT TO BOOLEANS --//

// TRUTHY values and FALSY values //

//Falsy values convert to false when we convert them to BOOLEAN

// Truthy values convert to TRUTH when we convert them to BOOLEAN

// 5 Falsy values
// 0
// '' -> enpty string
// undefined
// null
// NaN
console.log("Falsy values example");
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
let price; // price is now undefined converting to boolean will return false
console.log(Boolean(price));
// all of the above will be falsei

console.log("truthy value example");

console.log(Boolean(5));
console.log(Boolean("not empty string"));

//----- TYPE COERSION -----//

console.log("i am " + 23 + "year old"); // convert 23 to string

console.log("23" + "10" + 5); // + operator convert all the numbers given to string

console.log("23" - "10" - 3); // - operator convert all the strings to numbers

console.log("23" * 10); // * convert strings to numbers

console.log("230" / 10); // divide also convert strings to numbers
//------------------------------------------------------------------------//

let n = "1" + 1; // n becomes 11 since + convert number to string
n = n - 1; // n becomes 10 ( 11 - 1 ) since - convert string 11 to number 11
console.log(n); // output will be 10
