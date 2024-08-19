'use strict';
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let add = arr.reduce((prevNum, currNum) => {
    return prevNum + currNum;
});
console.log(add);//55
