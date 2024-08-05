// logical operators
// it will return boolean value 

// logical AND  = both values should be true 
//  let a = 6;
//  let b = 5;

//  let cond1 = a > b;
//  let cond2 = a === 6;
//  console.log("cond1 && cond2");

 // logical OR   = if any one of the value should be true then it will return true

 let a = 4;
 let b = 6;

console.log(" cond1 || cond2");

//lodical NOT  = it will make reverse
console.log("!(6>5)= " ,!(a===6));

// A "good string" is a string that starts with a letter 'a'& has length>3.Write a program to find a string is good or not
let str = "apple";
if(str.length>=3 && str[0]==="a"){
    console.log("the string is a Good String");
}else{
    console.log("the string is not a Good string");
}