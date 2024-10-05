// function - ebable code reusability, easy maintenance, scalability purposes
/*
function functionName(){
}
top to bottom execution - puts everything in memory and execute line by line

//1. Mandatory parameter - regular function
function functionName(parameterName:dataType){
}

//2. Optional parameter - joins or not I will start the meeting - ?
function functionName(parameterName1:dataType, parameterName1?:dataType){
}

//3. default parameter - assign a value - if override take overridded value - if not passed take the default value
function functionName(parameterName1:dataType, parameterName1?:dataType, parameterName3:dataType){
}

// undefined - You are from  undefined
// in SQL - if null - will not return null passed - says nothing there
// in TS - if null - have to create a placeholder and I will place something there. 
// in TS in case of undefined - absence of value user did not define it so gives message - You are from  undefined
// Nan - Not a number
*/

function greeting(){
    console.log("Welcome Students");
    console.log("How is your TS learning??");
}

function greetingParam(studentName:string){
    console.log("Welcome 1", studentName); // Way 1
    console.log(`Welcome 2 ${studentName}`); // Way2 - tick symbol
}

function greetingDefault(studentName:string, location?:string, batchMonth:string="August 2024"){
    console.log("Welcome", studentName); 
    console.log("You are from ", location); 
    console.log("You are part of batch - ", batchMonth); 
   
}

//greeting();

// greetingParam(); Expected 1 arguments, but got 0.ts(2554)- function.ts(17, 24): An argument for 'studentName' was not provided.
greetingParam("Rajani");
greetingParam("Ramki");
greetingParam("Saharsh");
greetingParam("Keshav");

console.log("===============");

// greetingDefault(); // 2nd optional
//greetingDefault() //Expected 1-3 arguments, but got 0.ts(2554)

//greetingDefault("Rajani", ); // greetingDefault(studentName: string, location?: string, batchMonth?: string): 
greetingDefault("Rajani", "Chennai", "Aug 24" ); // greetingDefault(studentName: string, location?: string, batchMonth?: string): void
console.log("===============");

greetingDefault("Rajani"); // Mandatory - 2nd optional - 3rd optional - so no error
// You are from  undefined since did not pass it
// You are part of batch -  August 2024 - not passed but took it from the default value
console.log("===============");

greetingDefault("Priya", "Delhi", "Sept 24"); // override values - You are part of batch -  Sept 24
console.log("===============");

// Is it NaN in JS - no
// example of undefined vs null
// Fetch Price of an iPhone 
// "$1000" - passed as string
// Convert to number to do arithmetic operation - NaN not a Number - error message


function multiply(a:number,b:number):number{
    return a*b;// return x2=4

}
console.log("multiply", multiply(10,20))

// in Regular function => Call , do the operation, return value 

// concise this in Arrow function - const, functionNmae, pass dataType, => operation
// Not mandatory to - return the result
// const why?? => does the exact job of assigning a const to the function
// const multiplyArrow() => is a function name not a variable name

// Regular function - if not return - will not get the value back
// => function - basic nature is to get something from the function

// no need to return - takes the last value but a good practice to always return value
// Always good to mention return type of a function for both types of function
// Regular function - like line 75 => function multiply(a:number,b:number):number{

// Arrow function (line 97, 102) - const multiplyArrow2 = (a:number,b:number):number => {

const multiplyArrow = (a:number,b:number) => a*b;
console.log("multiplyArrow", multiplyArrow(10,20))

// If more than 1 line to process - need to return result, storing the returned value in a constant
const multiplyArrow2 = (a:number,b:number):number => {
    return a*b;}
console.log("multiplyArrow2", multiplyArrow2(10,20))
// real time no console.log 
let output:number= multiplyArrow2(10,20);
console.log("let output:number", output);

// Return type is not mandatory but good practice
// Java is mandatory
// TS optionanl but good for type checking

// Return type depends on what kind of operation you are doing
// a+b: String concat 
// at the eod you know what the function will return

// Can pass any and return ??
