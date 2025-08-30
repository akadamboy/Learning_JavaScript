// basic math operations
const birthYear = 2000;
const age = 2025 - birthYear;

console.log( age);
console.log(age * 2);
console.log(age/10);
console.log(age ** 3); // power of 

//---------------------------------------//
//other use of operators

const firstName = 'shan';
const secondName = 'abraham';
console.log(firstName + ' ' +secondName);

//---------------------//

let x = 5 ;//assignment
console.log(x );
x += 10 // does x = x+10
console.log(x );
x *=2 // does x = x * 2 
console.log(x );
x++ // x = x+1
console.log(x );
x-- // x = x-1
console.log(x );

//-------------------//
//---COMPARISON OPERATORS---//

console.log(age > 18);
console.log(age< 18);
console.log(age <= 25);
console.log(age <= 20);

//--------------------------------//

//---TEMPLATE LITERALS---//
const myName = 'santhosh';
console.log("my name is "+ myName +", my age is "+ age);
//instead of this we can use

console.log(`my name is ${myName} and my name is ${age}`)

// printing multiple lines
//old way
console.log('hi my name i santhos \n\
i am from kerala \n\
my age is 25')

//new way

console.log(`hi my name is abraham
i am from noida
i love java script`)


