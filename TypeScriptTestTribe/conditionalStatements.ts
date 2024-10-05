// If I am a Non married -  I can be happy. I can play. I can go play with my friends
// If I am married - I have to work. I have to cook.

/* 
If Block
Syntax
if (conditionToBeMet){
logic
}
*/

let age2 =10; // age = not allowing to declare age as a variable - used in another ts fil
if (age2>18){
    console.log("I am a major");
    console.log("I can vote");
}
else{
    console.log("I am a minor");
    console.log("I cannot vote");
} 
// to add multiple conditional statements
// If elseif elseif else - // deafult Block
let grade = 50;
if(grade>90){
    console.log('Super')
}
else if(grade>80 && grade<90){
    console.log('Very good');
}
else if(grade>70 && grade<80){
    console.log('Average');
}
else{ 
    console.log('Needs improvement');
}

// Use switch statement to improve on this
