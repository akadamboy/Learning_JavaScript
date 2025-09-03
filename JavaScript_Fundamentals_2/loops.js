//------   FOR LOOP.  -----//
const studentNames = ["john", "alwin", "ray", "sam", "alwin"];

for (let index = 0; index < studentNames.length; index++) {
  const element = studentNames[index];
  console.log(element);
}

//---- continue and break ----//

const sampleArray = [
  "john",
  "alwin",
  23,
  "diva",
  34,
  true,
  false,
  200 - 115,
  studentNames,
];

for (let i = 0; i <= sampleArray.length; i++) {
  if (typeof sampleArray[i] !== "string") continue;

  console.log(`${sampleArray[i]} is a string`);
}

for (let i = 0; i <= sampleArray.length; i++) {
  if (typeof sampleArray[i] !== "string") continue;

  console.log(`${sampleArray[i]} is a string`);
}

//----- While Loop ----//
let i = 0;
while (i < sampleArray.length) {
  console.log(sampleArray[i]);
  i++;
}
