// let arr =[["X",null,"0"],[null,"X",null],["0",null,"X"]];
// console.log(arr); 
// arr[0][1]=0;

// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]
    
// let arr =[7,9,0,-2];
// let n = 1;
// let ans =arr.slice(0,n);
// console.log(ans);
// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, 0, -2]

let arr =[7,9,0,-2];
let n = 4;
let ans = arr.slice(1,n);
console.log(ans);