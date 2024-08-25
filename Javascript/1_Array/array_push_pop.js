// arrays are immutable means we can change it as String are mutable we can not change string 

//!push
let arr=[10,20,30,40,50,60];
console.log("before push",arr);
// New elements to add to the array.Appends new elements to the end of an array, and returns the new length of the array.
arr.push(70);
console.log("after push(70)",arr);

let x=arr.push(80);
console.log("Which value will return after arr.push(80):",x);//it will return only length of new array

/*
output ==>
before push [ 10, 20, 30, 40, 50, 60 ]
after push(70) [10, 20, 30, 40,50, 60, 70]
Which value will return after arr.push(80): 8
*/

//!pop
let array=[10,20,30,40,50,60];
console.log("before pop()",array);
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
array.pop();
console.log("after array.pop()",array);

let y=array.pop();
console.log("Which value will return after array.pop():",y);//it will return a poped element from the array
/*
output

before pop() [ 10, 20, 30, 40, 50, 60 ]
after array.pop() [ 10, 20, 30, 40, 50 ]
Which value will return after array.pop(): 50
*/