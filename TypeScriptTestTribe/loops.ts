// Switch vs loop - execute same set of code again and again save resources reusability
// for while, do while, forEach, iterate
/*
for (initialization;condition;increment/decrement){
logic
}
*/

for(let i=1; i<=10; i++){
    console.log(i);
}

// if i>0 => will end up in infiite loop, condition never goes to end - very important

/*
For - we know how many times it will loop
While - we don't know when the loop will execute or exit :)
ex - connection with a DB - max of 5 times, - if server is down so does not make sense if we try to make connection 1 or 100 times 
for loop - 1 shot
while - some steps
check the logic 1st then execute the code - cond-code
*/

let count = 1;
while(count<=10){
    console.log(count);
    // important to know to increment count or else => give infinite loop
    count++;
}

/* doWhile not supported by TS
Work done 1st then execute the logic
code-cond
/*

/*loop control statement
Scenario 1: Break - skip entire loop
Scenario 2: COntinue - COntinue with next execution
*/

for(let i=1; i<=10; i++){
    if(i==5){
        break; // 1 2 3 4 5 - come out of loop
    }
    console.log(i);
}

for(let i=1; i<=10; i++){
    if(i==5){
        continue; // 1 2 3 4 {5 skip & continue} - 1 2 3 4 6 7 8 9 10 continue with the loop
    }
    console.log(i);
}