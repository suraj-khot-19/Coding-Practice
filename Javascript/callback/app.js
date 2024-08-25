'use strict';

// passing a function as an argument is an callback function
// ex1
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallBackFun) {
    sumCallBackFun(a, b);
}
calculator(10, 20, sum);

// ex2
const cal = (m, n, callBack) => {
    callBack(m, n);
}
cal(10, 25, (a, b) => { console.log(a + b) });

// ex3
setTimeout(() => { console.log("hello i am a callback") }, 1000);//2s