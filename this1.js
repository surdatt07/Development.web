// this keyword
// This keyword refers to an object that is executing the current piece of code
// const student ={
//     name : "surdatt",
//     age  : 20,
//     eng : 85,
//     math : 99,
//     phy: 89,
//     getAvg(){
//         let avg =(eng + math + phy);
//         console.log(avg);
//     }
// }

getAvg(); 
 // this will give an error becoz we cannot access
 // objects in method so in these kinf of cases
  // we use " this " keyword
  const student ={
    name : "surdatt",
    agg  : 20,
    eng : 85,
    math : 99,
    phy: 89,
    getAvg(){
        let avg =(this.eng +this.math + this.phy);
        console.log(avg);
    }
}
getAvg(); // no get op

// this ka meaning hai ke oo object 
