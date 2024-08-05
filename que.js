// write an arrow funtion that returns the square of a number 'n'
const func = (n)=>{
    console.log(n*n);
}
func(4); //16

// write a function that prints "hello world" 5 times at interval of 2s each
let id =setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000);

//write an arrow function named arrayAverage that accepts an array of number and returns the average of those numbers

const arrayAverage =(arr)=>{
    let total =0;
    for(let number of arr){
        total += number;

    }
    return total /arr.length;
        
    

};
let array =[1,2,3,4,5,6];
console.log(arrayAverage(arr));

// write an arrow function named isEven() that takes a ingle number as an asrgument and return if it is even or not

const isEven =(n)=>{
    if(n % 2 == 0){
        console.log("is even");

    }else{
        console.log("isNot even")
    }
    
}