const max =prompt("enter the maximum number");

const random =Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number");

while(true){
    if(guess == quit){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you are right ! congrats");
        break;
    }
    else if(guess<= random){
       guess = prompt("your gues was too small");
    }
    else if(guess>=random){
        guess = prompt("your gues was too big");
    }
    // else{
    //    guess = prompt("Your guess was wrong ,Please try again");

    // }
}