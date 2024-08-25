// promise chaning means using then after then like calback hell

function asyncFun(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sucess");
            console.log("data:", data);
        }, 4000);
    });
}

//! way 1
/*
let p1 = asyncFun(1).then((res) => { console.log("Response : ", res) });
let p2 = asyncFun(2).then((res) => { console.log("Response : ", res) });
*/
// ! but using this we got an response both at one time

//? way 2 correct but not valid we always prefer promis chaining
/*
asyncFun(1).then((res) => {
    console.log("Response : ", res);
    return asyncFun(2).then((res) => {
        console.log("Response : ", res);
        return asyncFun(3).then((res) => {
            console.log("Response : ", res);
        });
    });
});
*/

//? way 3 corrected way
/*
asyncFun(1).then((res) => {
    console.log("Response : ", res);
    return asyncFun(2);
}).then((res) => {
    console.log("Response : ", res);
    return asyncFun(3);
}).then((res) => {
    console.log("Response : ", res);
    return asyncFun(4);
}).then((res) => {
    console.log("Response : ", res)
});
*/

//todo: understanding it how working
console.log("fetching data 1...");
asyncFun(1).then((res) => {
    console.log("Response : ", res);
    console.log("fetching data 2...");
    return asyncFun(2);
}).then((res) => {
    console.log("Response : ", res);
    console.log("fetching data 3...");
    return asyncFun(3);
}).then((res) => {
    console.log("Response : ", res);
    console.log("fetching data 4...");
    return asyncFun(4);
}).then((res) => {
    console.log("Response : ", res);
    console.log("Process completed!");
});