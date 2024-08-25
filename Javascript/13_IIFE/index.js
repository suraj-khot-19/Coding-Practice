// ! this is called as IIFE(Immediately invoke function expression)
// 1 with function
/*
(function Name() {
    code
})();
*/

(function printHello() {
    console.log("i dont require funuction call haaa");
})();

// 2 with arrow function
/*
( ()=> {
    code
})();
*/

(() => {
    console.log("i dont require funuction call haaa");
})();

// 3 using with async function
/*
(async function myfun() {
    await code;
})();
*/
const x = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", data);
            resolve("sucess");
        }, 1500);
    });
}
(async function myfun() {
    await x(1);
    await x(2);
    console.log("after async-await function");
})();