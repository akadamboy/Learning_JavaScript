const age = 15;

const isLegalAge = age>= 18;

if(isLegalAge) {
    console.log('you can take driving license now');
}
else{
    const yearsLeft = 18 - age;
    console.log('you cannot take driving license now');
    console.log(`you can take license in ${yearsLeft} years`);
}

// example for let and var difference

// const birthYear = 2000;

// if (birthYear <= 2000)
//    { 
//     let century = 20;
// }else{
//     let century = 21
// }

// console.log(century) 

// the above code will give the error century not defined 
// since let is only accesseble in the if else block.
//we can use var or we can define the contury variable outside the if else block


const birthYear = 2000;

if (birthYear <= 2000)
   { 
    var century = 20;
}else{
    var century = 21;
}
console.log(century);
//-----------------------------//
const birthYear2 = 2001;
let centuryNew;
if (birthYear2 <= 2000)
   { 
    centuryNew = 20;
}else{
     centuryNew = 21;
}
console.log(centuryNew);


//----------------------------------------------------//

//----switch statement----//

const day = prompt('enter a day');

switch(day){
    case 'monday':
        console.log('today is monday you need to go to office');
        break;


    //below case work for both sunday and saturday. no need to write different case 
    case 'sunday':
    case 'saturday':
        console.log('today is holiday you dont need to go to office');
        break
    
    default:
        console.log('enter a day');
        
}

//---------------------------------------------------//

//---TERNARY OPERATOR---///

const personAge = 20;

personAge >= 18 ? console.log('you can take driving license') : console.log('you cannot take driving license');

const drink = personAge >= 18 ? 'wine' : 'water';
console.log(drink)

console.log(`your age is ${personAge} and you can drink ${personAge >= 18 ? 'wine' : 'water'}`);
