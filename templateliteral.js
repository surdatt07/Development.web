// template literals
// these are the special type of strings

let specialString = `this is template literal`;
console.log( typeof specialString);  // typeof specifies the type of thing

// but the question arise that we can use "" or '' for defining the string so why we used the``

let obj = {
    item :"pen",
    price : 10
};

// console.log("the cost of" , obj.item,  "is",obj.price, "rupees"); // obj is for accesing th obj

// we cane do the above sentence in simpler way 

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//string interpolation
// to create strings by doing substitution of placeholders this phenomeanon is called string interpolation