/*
Creates a new Promise.
A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
*/
let promise1 = new Promise((resolve, reject) => { });
console.log(promise1);
/*
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
*/

let promise2 = new Promise((resolve, reject) => { resolve("Sucess") });
console.log(promise2);
/*
Promise {<fulfilled>: 'Sucess'}
[[Prototype]]:Promise
[[PromiseState]]:"fulfilled"
[[PromiseResult]]:"Sucess"
*/

let promise3 = new Promise((resolve, reject) => { reject("Cancel") });
console.log(promise3);
/*
[promise {<rejected>: 'Cancel'}
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: "Cancel"
!index.js:19 Uncaught (in promise) Cancel
*/
