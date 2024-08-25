'use strict';

// it is a higher order fun (the fun witch iterate throw loop with a callback fun)

let arr = [1, 2, 3, 4, 5, 6];


//ex2
let evenarr = arr.filter((element, index, array) => {
    return element % 2 == 0;
});
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]
console.log(evenarr);//[ 2, 4, 6 ]