// every (like logical and)
// this function check the conditon as a callback and if it returns true value then
// then array will execute and if returns the false value then

[1,2,2,3,4].every((el)=>(el %2 == 0));  // false
[2,4].every((el)=>(el%2==0));//true



//some(like logical or)
// this will return also a true or false value

[1,2,3,4,5].some((el)=>(el%2==0)); // true