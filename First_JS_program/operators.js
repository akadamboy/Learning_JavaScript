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


//----------------- EQUALITY OPERATORS (== AND ===)-------//

// === is Strict equality check value and type during comparison.
// == lose qeuality operator -> will not check type and perform type coerscion to check value

const myAge = 18;

if (myAge === 18) console.log('You are of legal age 1'); // === Strict equality

const myAge2 = '18'
if (myAge === 18) console.log('You are of legal age 2');// will not print legal


const myAge3 = '18'
if (myAge == 18) console.log('You are of legal age 3 '); // will print legal since its lose equality
//------------------------------------------------------------------------------------------------------------------//


const personAge = 18;

if (personAge !== 18) console.log('You are not 18'); //Strict not equal to 

const parentAge = '34'
if (parentAge != 60) console.log('you are not that old') // lose non equality


//------------------------------------------------------------------------------------------------//

//----LOGICAL OPERATORS---//

const hasDrivingLicense  = true
const hasGoodVision = false

console.log(hasDrivingLicense && hasGoodVision) //AND operator
console.log(hasDrivingLicense || hasGoodVision) //OR operator
console.log(!hasDrivingLicense) // NOT operator

