'use strict'; // this will enable secure mode for more safty and easy development, diplay more erros 



function getUser(){
    const userName = prompt('enter your name');
    return userName;
}

console.log(getUser());


function verifyAge( userAge , gender){

    console.log(`user gender is ${gender}`);
    console.log(`your age is ${userAge} and ${userAge>=18? 'you can use this app' : 'you cannot use this app'}`);

}


const userAge = prompt('enter your age');
const gender = prompt('enter gender');
verifyAge(userAge, gender)
