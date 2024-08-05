// these are also special type of loops which are used for objects and arrays

//for in loop

let student = {
    name : "surdatt nimbal",
    age : 20,                         //onject
    cgpa : 7.33,
    isPass : true 
};

for(let i in student){
    console.log("i=",i "value=", student[i]);
}