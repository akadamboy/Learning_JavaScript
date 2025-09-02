const studentNames = ['john', 'alwin', 'ray', 'sam', 'alwin'];

const sampleArray = ['john', 'alwin', 23, 34, true, false, 200 - 115, studentNames]; 
//we can store array inside an array and give other expressions also

console.log(studentNames);
console.log(sampleArray);

console.log(typeof sampleArray) ;// output is object

const years = new Array(2001, 2002, 2003, 2004);

console.log(years);

console.log(years[3]);
console.log(years.length);

console.log(studentNames[studentNames.length-1]);

studentNames[2] = 'arun';
console.log(studentNames);

const calcAge = function(birthYear) {

    return 2025 - birthYear ;  
}

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]
console.log(ages)


//------- ARRAY METHODS -------//

studentNames.push('rambo') //. push  adds new element at the end andreturns the new length of the array 
studentNames.unshift('damboy') //adds new element to begining of the array
console.log(studentNames)

studentNames.pop()  // returns the removed element from end
console.log(studentNames)
studentNames.shift()// removes from begining and return the element
console.log(studentNames)

console.log(studentNames.at(3))

console.log(studentNames.indexOf('alwin'))
console.log(studentNames.includes('alwin'))// return true or false , Strict equality (output = true)
console.log(studentNames.includes('Alwin'))// return true or false , Strict equality (output = false)

console.log(years.findIndex(i=> i%2 === 0) )  // returns index of the first element that satisfy the condition





