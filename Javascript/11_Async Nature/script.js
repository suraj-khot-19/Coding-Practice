// the funtion wait for a while but without disturbing any other statements

function fn(time) {
    console.log(`hello i will called after ${time}`);
}
setTimeout(() => fn(0.5), 500);//2
setTimeout(() => fn(0.1), 100);//1
setTimeout(() => fn(1.5), 1500);//4
setTimeout(() => fn(1), 1000);//3
console.log("haaaa i will print first");
// so this is a async nature

// api calls are also an async fn

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? async functions are return automatically promises
async function MyFun() {
    console.log("function is async and returning promise automatically");
}
// calling function in browser console
/*
MyFun()
script.js:17 function is async and returning promise automatically
Promise {<fulfilled>: undefined}
[[Prototype]]:Promise
[[PromiseState]]:"fulfilled"
[[PromiseResult]]:undefined
*/

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ex1 
function asyncFun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async function");
            resolve("Sucess");
        }, 4000);
    });
}
async function api() {
    await asyncFun();
}
/**
api()
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
script.js:33 Async function //after 4 sec
 */


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//?? ex2 callback hell and promise chaning with more than one call to a function is done in 3 lines of code

const x = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", data);
            resolve("Sucess");
        }, 3500);
    });
}
async function api2() {
    console.log("fetching data 1....");
    await x(1); //1st and wait
    console.log("fetching data 2....");
    await x(2);  //2st and wait
    console.log("fetching data 3....");
    await x(3); //3st and wait
    console.log("fetching data 4....");
    await x(4); //4st
    console.log("fetching data process completed!");
}
/*
api2();
script.js:61 fetching data 1....
Promise {<pending>}
script.js:55 Data: 1
script.js:63 fetching data 2....
script.js:55 Data: 2
script.js:65 fetching data 3....
script.js:55 Data: 3
script.js:67 fetching data 4....
script.js:55 Data: 4
script.js:69 fetching data process completed!
*/