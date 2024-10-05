// Number - whole number or floating number
// Give me anything - I will store in Number DT
let age = 31;
let piValue = 3.14;
let decimalNumber = 1.999993;
console.log(age+piValue+decimalNumber);

// String - char or String anything fine, everything is String
let firstName = "Rajani";
let lastName = "C"
let ageString = "31" // "99.99" ok too, you cannot do any arithmetic operation

//ageString.toString(); or Number(ageString)
//can do but not recommended since asking TS to do extra thing

// Boolean
let isClassIneresting = true; // "true" not ok
let doesStudentFeelingSleepy = false;

// Any - String, Number, boolean anything
// I bought a box but don't kow what I will put it
//let value = 42; // mouseover - Number
let value:any = 42; // function value not known
let value2:any = 43;
value2 = "Rajani"; // not allowed // add value:any error is gone

// When to use when not to use -  Caveats
// Scenario - we can make mistake
let value4:any = 43;
value2 = "Vighnesh" // wrong but TS not complaining

// Null and undefined
// Why ? null => not just initilize value but assert value to be null or not null
// Backend => send 0 or no value, front-end needs to check
// It is not an empty placeholder, instead of me giving a value I am giving an absence
let nullVariable = null;
//nullVariable = "Rajani" - Type '"Rajani"' is not assignable to type 'null'

// uninitializes value or intentially missing values
// not used too much
let undefinedVariable = undefined;
//undefinedVariable = "Rajani" - Type '"Rajani"' is not assignable to type 'undefined'.ts(2322)

// Variable name start with - small case followed by upper case - rule
// ts file name - small case followed by upper case





