// Spaceholder in memory to hold value
// Syntax - var variableName = variableValue
// let/var/const
// use const when value never change
// code will first converted to JavaScript, technically it will not affetc the performance

var myName = "Rajani"
let myAge = 45;
const myGender = "female"

console.log("Rajani:");
console.log("My name is " + myName + " and my age is " + myAge + " and I am of gender " + myGender);
// var and let values can be changed 
// const cannot be changed

// when want to override the value, don't delcare as a var again
myName = "Rajani C";
myAge = 31;
//myGender =  "male" // Cannot assign to 'myGender' because it is a constant.ts(2588)
console.log("My name is " + myName + " and my age is " + myAge + " and I am of gender " + myGender);