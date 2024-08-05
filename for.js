// loops 
// loops are used to repeat the code for particular time of interval

// for loop

// syntax
// for(intializatiom; condition; updation){
//     //code
// }

//code1
// for(let i=1; i <= 5; i++){
//     console.log("My name is surdatt nimbal");  // here we used let as it is block scope variable which is valid until the loop it cannot be accesible after the loops
// }

// in this loop first it intialize the value and then ot will check the condition if condition satisfy then code runs andd then intiak value get updated and then checks the condition util the condition is true then only code runs after that we will come out of the loop

// there is infinite loops in the loops we do not have to use this


// //print all odd numbers from 1 to 15
// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }

// //reverse
// for(let i=15;i>=1;i=i-2){
//     console.log(i);
// }

// //print all even numbers from 2 to 10
// for(let i=2;i<=10;i=i+2){
//     console.log(i);
// }

// //reverse
// for(let i=10;i>=2;i=i-2){
//     console.log(i);
// }

// //print the multiplication table for 5
// for(let i=5;i<=50;i=i+5){
//     console.log0(i);
// }

// // to print the table of any number

// let n = prompt("write your number");
// n =parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }


//nested loop

// favorite movie
// let favMovie = "avatar";
// let guess = prompt("Guess the movie");
// while((guess!=favMovie)&&(guess != quit)){
//     console.log("wrong guess");
//     guess=prompt("guess the movie");
    

// }
// if(guess == favMovie){
//     console.log("ongratulation");
// }

let favMovie = "avatar";
let guess = prompt("Guess the movie");
while(guess!=favMovie){
    if(guess == quit){
        console.log("You quit");
        break;
    }
    console.log("wrong guess");
    guess=prompt("guess the movie");
    

}
if(guess == favMovie){
    console.log("ongratulation");
}