/*
1. Global Scope
2. Function Scope / Local Scope
3. Block Scope
*/

// Global scope - free bird
var nameBatch = "Aug 2024";
const multiplyArrow3 = (a:number,b:number):number => {
    let nameBatch2 = "August 2024"
    console.log("Local function: multiplyArrow3: ", nameBatch2);
    console.log("Global var:", nameBatch);

    // JS ECMA 3.6 
    // Block scope
    if (true){
        let nameBatch3 = "August 26 2024"
        console.log("Block var:", nameBatch3);
        console.log("Local var:", nameBatch2);
        console.log("Global var:", nameBatch);
    }
    console.log("Local var:", nameBatch2);
    console.log("Global var:", nameBatch);
    // console.log("Block var:", nameBatch3); // not allowed;
    return a*b;
}
//nameBatch2 // Local var not accessible outside function block
//nameBatch3 // Bloack Var not accessible outside Block
console.log("Global var:", nameBatch);

console.log("multiplyArrow2", multiplyArrow3(10,20))

//===============================//
// var, let, const

// var keyword scope - function scope
// At Global level - var or let all gives same access
let globalVariable = "Global"; 

const multiplyArrow4 = (a:number,b:number)=> {
    //var functionVariable = "var Function level"
    
    let functionVariable = "let Function level"
    //let functionVariable // simple guy 
    //if declared at func level - access every where at the func level
    //if declared at block level - access every where at the block level
    console.log(functionVariable)

    // variable in a block scope
    if (true){
        //var functionVariable= "Function var";// Can access any where within the function
        let functionVariable= "Function let";// Can access any where within the function
        console.log(functionVariable)

        //var blockVariable = "Block";// can be accessed outside block
        //let blockVariable = "Block"; // cannot be accessed outside block

        // const vs let - exactly same in terms of scope
        // only difference - let allows to change value - const does not
        
        // let blockVariable = "Block"; // cannot be accessed outside block
        const blockVariable = "Block"; // cannot be accessed outside block
        // blockVariable = "Block2"; // Cannot assign to 'blockVariable' because it is a constant.ts(2588)


        console.log(blockVariable);
    }
    //console.log(blockVariable);// because of var accessible outside block

}

console.log("Global var:", globalVariable);
//console.log("Function var:", functionVariable);
//console.log("Function let:", functionVariable);

// let more restrictive
// var more loose
// ECMA 6.0 - don't use var - only let and const since more restrictive

// var within function - am i going to use it any where outside the block
// use it only within a block or function based on - usage