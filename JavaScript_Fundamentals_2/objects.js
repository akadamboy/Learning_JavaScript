const person ={
    name : 'sam',
    age: 23,
    dob: 2002,
    job: 'consultant',
    friends:  ['john', 'alwin', 'ray', 'sam',]
}

console.log(person);
console.log(Object.keys(person))
console.log(person.name);
console.log(person['name']); // we can pass statements 

const detailToFind = prompt('enter what do you want to know about the person');

console.log(person[detailToFind]);

if(person[detailToFind]){
    console.log(person[detailToFind])
}else{

    // alert(`we can only display name, age,dob,job and friends of person`)
    alert(`we can only display ${Object.keys(person)}`)
}

person.locaion = 'india';
person['gmail'] = 'person@gmail.com';
console.log(person)

console.log( `person have ${person.friends.length+1} friends and their names are
    ${person.friends}`
)


//----------------------------------------------------------------//

//we can function expression as a value in object//


const person2 ={
    name : 'sam',
    birthyear : 2001,    
    job: 'consultant',
    friends:  ['john', 'alwin', 'ray', 'sam',],

    getAge : function (birthYear){
        return 2025 - birthYear
    },

    leaglAge : function (){
        if(2025 - this.birthyear >= 18){        //this  keyword takes value if the value is present in the object itself
            return "you are of legal age"
        }else{
            return "you are not of legal age"
        }
    },

    findAgeAndStore : function (){
        this.age = 2025 - this.birthyear
    }
}

console.log(person2.getAge(person2.birthyear));

console.log(person2['getAge'](person2.birthyear));

console.log(person2.leaglAge); // this displays funciton code as it is
console.log(person2.leaglAge()); // this executes the code

person2.findAgeAndStore()
console.log(person2)  // this will have a new object key value pair age







