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





