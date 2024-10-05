// Arithmetic operation
// + - * / %

let a = 20;
let b = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b); // quotient
console.log(a%b); // remainder

// Comparison operator
// Case 1
// == equal values
let isEqualValue = a==b; // comapring values only same data types = 2 ==
console.log(isEqualValue);

// Case 2
// == equal values + data types as well
let isStrictEqual = a===b; // comparing values + data types both = Called Strict ===
console.log(isStrictEqual);

// Case 3
let isNotStrictEqual = a!==b; // comparing values + data types both = Called Strict ===
console.log(isNotStrictEqual);

// Case 4
// Comparing value + same data types
let x = 20;
let y = 10;
let greater = x>y; // true
let smaller = x<y; // false
let greaterEqualTo = x>=y; // true
let smallerEqualTo = x<=y; // true

// example, 2 values coming from 2 sources
//if(a==b){ // values equal
//}
// or 
//if(a===b){ // values + data types both same
//}

// Assignment operator
let num = 5;
//num = num + 10;
num += 10; // 15
num -= 10; // -5
num *= 10; // -5
num /= 10; // -5
num %= 10; // -5

// Ternary Operator
// Based on a condition => result => if this ? do this : else this
let myAgeIs = 40;
let message = myAgeIs>60 ? "Senior Citizen" : "Adult"
console.log(message);





