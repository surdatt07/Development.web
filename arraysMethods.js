// Array methods

// 1. Push Methods: add to end 
let food = ["potato","apple", "banana","mango"];
console.log(food.push("chips"));
// 2. Pop Method: delete from end
console.log(food.pop("potato"));
// 3. toString : to convert arrays into string
console.log(food.toString);
// 4. concat : to join multiple arrays
let heros = ["ironman","superman","batman"];
let heroines = ["aish","ish"];
console.log(heros.concat(heroines));
// 5. unshift : add to start  // similar like push
// 6. shit : delete from start
// 7. slice : return a piece of the array
console.log(heros.slice(1 ,3));
// 8.splice : change original arrays (add , remove ,delete)
let num = [ 1,2,3,4,5,6,];
console.log(2,2,101,102);


// que . Create an array to store compnies "bloomberg","microsoft","uber","google","IBM"
// a.remove the first company from the arays
// b. remove uber & add ola in its place
// c.add amazon at the end

let compnies = ["bloomberg","microsoft","uber","google","IBM"];
console.log(compnies.shift(0));
console.log(compnies.splice(1,2,"ola"));
console.log(compnies.push("amazon"));