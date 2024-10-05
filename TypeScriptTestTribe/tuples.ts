// like a SET - certain order - we cannot have this in Array

//let person = ["vignesh"] // Array - not always - tuple can have [ ]  also

let person:[string,number,boolean] = ["vignesh", 30, true] // Array cannot achieve this - tuple certain order
//let person2 = ["Keshav", 25, true]; // Array
let person2 = ["Keshav", 25, true]; // Array

let firstName1 = person[0]; // Array 
console.log(firstName1);

person[1] = 31; // "31" - use any[] => let person:any[] = ["vignesh", 30, true] 
console.log(person[1]);

// must follow order
// Once order defined cannot deviate - must follow
// let person1:[string,number,boolean] = [30, true, "vignesh"] // Type 'string' is not assignable to type 'boolean'.ts(2322)

person.push("Dhrumil");
console.log(person) // [ 'vignesh', 31, true, 'Dhrumil' ]

person.push("Rajani",42,false); // like Array
console.log(person) // [ 'vignesh', 31, true, 'Dhrumil', 'Rajani', 42, false ]

// Should have only 1 set

// type safety - achieved with this rule

// limitation - only same set of rule - resolved in Objects

// When you don't know what you are going to get - use Array

// Usually we are not doing Push and pop in tuples

// Do not update tuple - only 1 set of data, fixed order important

