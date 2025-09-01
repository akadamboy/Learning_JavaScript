//----------------------------------------------//
//------ DATA TYPES --------//
//JavaScript has Dynamic Typing
// we dont need to explicitly define the data type 
// java script automatically understands the variable type

let age = 23 ; // age becomes integer
console.log(typeof(age));

let age1 = '23' // here age becomes a String
console.log(typeof(age1));

let winner = true // winner is of type boolean
console.log(typeof(winner));

let items; //here it is undefined since we didnt give any value yet
console.log(typeof(items));

// console.log(typeof 23); not neccessary to add brackets after typeof

// there are other types Null, Symbol, BingInt

// console.log(javaScriptIsFun) --> this will not work since java script is interpreted language
let javaScriptIsFun = true;
if(javaScriptIsFun === true) alert("java script is fun");

javaScriptIsFun = 23 //we can change the data type by assigning a different value of different type

let year;

console.log(year); // this will return undefined since no value is assigned

//--------------------------------------------------------//
//--- let, var, const ----//

let x,y; // we can define 2 variables like this


let ageOfStudent = 30;
ageOfStudent = 31;

//let is used when we want to change the values of the variable later

//const
// const is used when we dont want to change the value of variable later
const birthYear = 2000;
//birthYear = 2001; --> this will not happen and will cause error

//  const birthYear; --> this will also cause error. Alwayse assigne value while using const.

// we will get the error "missing initializer in const declaration" 


//---var------//
// not recommanted to use.

var job = 'consultant'
job = 234

//let and var are similar but it will allow you to change the value though out function
// but let is block scoped. if we use let in for and if loops it will only work in that loop we can do anything out thise those blocks