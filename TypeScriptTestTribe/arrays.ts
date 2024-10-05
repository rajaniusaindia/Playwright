// Data structure to store objects - add same objects to same box => named a single variable
// Gives the ability to manipulate multiple sets of data - edit, add, remove, sort etc
let name2 = "Rajani";

// Array :iteral Syntax
//let fruits:string[] = ["Banana","Mango","Apple","Kiwi",2]; Type 'number' is not assignable to type 'string'.
//let fruits6:any[] = ["Banana","Mango","Apple","Kiwi",2]; //fine allowed.
let fruits:string[] = ["Banana","Mango","Apple","Kiwi"];
console.log(fruits);

// Array Constructor
let fruits2 = new Array("Banana2","Mango2","Apple2","Kiwi2");
console.log(fruits2);

// Access Array elements - indexing - starts from 0 - N
console.log(fruits2[1]);

// Update Array element values
fruits[1] = "Strawberry";
console.log(fruits);

// Can we have a specific data type - yes sure
let fruits3 = ["Banana","Mango","Apple","Kiwi", 2]; // Notice fruits3: (string | number)[]
console.log(fruits3);

let fruits4 = ["Banana","Mango","Apple","Kiwi", 2, true]; // Notice fruits4: (string | number | boolean)[]
console.log(fruits4);

// Array Constructor
let fruits5:Array<string> = new Array("Banana2","Mango2","Apple2","Kiwi2");

// This is called Type Inference - not there in JavaScript

// 4 methods used most - though we have many
let students:string[] = ["Sandeep","Maya","Rajani","Shubham"];
console.log(students)

// add - push - 1 data at a time - values to be added to the last 
students.push("Dhrumil")
console.log(students)

students.push("Vignesh")
console.log(students)

//students.push("Vignesh")
//console.log(students)

// pop - remove - no paramter needed - removes the last value
students.pop()
console.log(students)

// shift - - no paramter needed - remove 1st element
students.shift()
console.log(students)

// shift - remove 1st element
students.unshift("Sandeep")
console.log(students)

// this is only 30-40 %
// splice, unslice explore ??

// Can we push or pop based on Array[index] ??