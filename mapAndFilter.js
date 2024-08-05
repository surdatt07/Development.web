// //map  : it i a similar function like forEach function
// //      but it creates a new array which is of same size of original array

// let num = [1,2,3,4];
// let double = num.map((el)=>{
//     return el *2 ;

// });
// double();   // [2,,4,6,8]


// //filter : it is also same like map only but the callback function which we have defined , if it gives true value
// //        the it creates a new array but it gives a false value then it will not create a new array

// let num = [1,2,3,4,7,8,2,9,10,12,11];
// let ans = ((el)=>{
//     return el % 2 == 0; // true
// });
// ans();   // [2,4,8,2,10,12]