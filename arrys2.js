// looping in an array
// print all elements in teh array

// let marks =[ 96,95,94,95,96,92,55];
// for(let idx=0; idx<=marks.length;idx++ ){
//     console.log(marks(idx));
// }


// que 2 : for a given array with marks of student [85,97,44,37,76,60].Find the average marks of the entire class

// let marks1 =[85,97,44,37,76,60];
// let sum =0;
// for(let val of marks){
//     sum =sum + val;
// } 
// let avg = sum/marks.length
// console.log("average value of the arrys is",avg);

//que 3 : Fo a given array with prices of 5 items [250,645,300,900,50].All items have
        // an offer of 10% OFF on them .Change the arrays to store final price after applying offer
// let prices = [250,645,300,900,50];
// let i = 0;
// for(let val of prices){
//     console.log(`value at index$({i}=${val}`);
//     let offer = val/10;
//     prices[i]=prices[i]-offer;
//     console.log(`value after offer=${prices[i]}}`);
//     i++;
// }

let prices = [250,645,300,900,50];
for(let i =0; i<=prices.length; i++){
    let offer =prices[i]/10;
    prices[i]-=offer;
}
console.log(prices);

        