// key-value pair
// We want to give name to a value
// Array we don't name if 30 is age or may be address - therefore object resolved this
// Property - use DOT operator - gives a ll properties of this object

let person3 = {
    myName:"Rajani",
    age:30,
    gender:"Female",
    married:true
}
console.log(person3)

// This is the structure I will follow
// defined type - so I have to give data in the specified manner
type StudentDetails = {
    userName:string,
    age:number,
    married:boolean
}

// Like creating new objects with a type already defined
// Construct is for type checking and error handling
// Multiple data we can handle
// No concept of indexing - everything Properties
// Values will not be acceptable if not the same data type

const dhrumilData:StudentDetails = {
    userName:"Dhrumil",
    age:30,
    married:true
}

const rajaniData:StudentDetails = {
    userName:"Rajani",
    age:45,
    married:true
}

const studentAttended = {...dhrumilData, ...rajaniData};
console.log("studentsAttended", studentAttended)
