// arrow functions
// const func =(arg1,arg2..) =>{function}

const sum =(a ,b) =>{
    console.log(a+b); 
}

const cube =(n) =>{
    console.log(n*n*n);
}

const pow =(a,b)=>{
    console.log(a ** b);
}

// implicit return fuction
// in this the fuction did not do any work but it just return any value

// const func =(arg1, arg2) =>{value}

const mul = (a,b) => (
    a * b
);


// this wiyh arrow function

const student ={
    name : "aman",
    marks : 95,
    property :this,  // global scope which is window object
    getName : function(){
        return this.name;
        },
        getMarks : ()=>{
            return this.name;  // when we call this it will give undefined
        },   // uses parent scope 
    getInfo1 : function(){
        setTimeout(()=>{
            console.log(this)  // student object
        },2000);
    },
    getInfo2 : function(){
        setTimeout(function(){
            console.log(this) // window object
        },2000);
    }       
};
student();