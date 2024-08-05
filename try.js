console.log("Hello");
console.log("Hello");
console.log(a);
console.log("Hello");
console.log("Hello");

// in the above case the output is just 2 times hello 
// bcoz at the 3rd line we have the variable which
// is not defined so the further code is not run
// that is why use the try and catch in code


// the try statement allows u to define a block of code to be tasted for errors while it is being ecxecuted
// the catch statement allows u to define a block of code to be executed if an error occurs in the try block
console.log("Hello");
console.log("Hello");
try{
    console.log(a);
 }catch{
    console.log("caught an error that a is not defined");
 }
console.log("Hello");
console.log("Hello");