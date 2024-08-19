'use strict';

//1
// marks of student and filter then out who dcored 90+
let arr = [80, 90, 95, 100, 120, 85, 35];
let topper = arr.filter((value) => {
    return value > 90;
});
console.log(topper); //[ 95, 100, 120 ]

//2
//accept num and create array form 1 to num
let num = 20;
let numarr = [];
for (let i = 1; i <= num; i++) {
    numarr[i - 1] = i;
}
console.log(numarr);//[1,  2,  3,  4,  5,  6,  7, 8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

//3 using reduce method sum of arr
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr1.reduce((prev, current, arr) => {
    return prev + current;
});
console.log(sum);//55

//4 calculate factorial of arr
let factorial = arr1.reduce((prev, current, array) => {
    return prev * current;
});
console.log(factorial);//36...