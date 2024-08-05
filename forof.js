// these are special type of loops which are applied to strinngs and arrys

// for of loop

// let str="surdatt nimbal"
// for(let i of str){
//     console.log("i=",i);
// }

let fruits =["mango","apple","litchi","banana"];

for(fruit of fruits){
    console.log(fruit);
}
for(char of fruits){
    console.log(char);

}

//nested
 let heros=[
    ["spiderman","batman","wonder women"],
    ["ironman","thor","flash"]
 ];
 for(list of heros){
    for(name of list){
        console.log(name);
    }
 }