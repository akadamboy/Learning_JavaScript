"use strict"; // this will enable secure mode for more safty and easy development, diplay more erros

function getUser() {
  const userName = prompt("enter your name");
  return userName;
}

console.log(getUser());

// this is called FUNCTION DECLARATION
function verifyAge(userAge, gender) {
  console.log(`user gender is ${gender}`);
  console.log(
    `your age is ${userAge} and ${
      userAge >= 18 ? "you can use this app" : "you cannot use this app"
    }`
  );
}

// assigning function to a variable
// this is called FUNCTION EXPRASSION
const findAge = function (birthyear) {
  return 2025 - birthyear;
};

const userAge = prompt("enter your age");
const gender = prompt("enter gender");
verifyAge(userAge, gender);

const birthyear = prompt("enter birth year");

// for normal functions we can call the function before declaration
// in below case where we assign function to variable name without a proper function name
//  we need to declare the function before calling it.
const age = findAge(birthyear);
console.log(` your age is ${age}`);

//------   ARROW FUNCTION   ------//

const findAge2 = (birthyear2) => 2025 - birthyear2;

const age2 = findAge2(2001);
console.log(age);

const yearsUntilRetirement = (name, dob) => {
  const age = 2025 - dob;
  const yearsLeft = 65 - age;
  return `hi ${name} you have ${yearsLeft} years till retirement`;
};

console.log(yearsUntilRetirement("john", 2001));
