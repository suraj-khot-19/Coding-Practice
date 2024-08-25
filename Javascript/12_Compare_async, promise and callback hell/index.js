//! 1 callback hell
let getData1 = (data, callBackFun) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", data);
            resolve("sucess");
            if (callBackFun) {
                callBackFun();
            }
        }, 4000);
    });
}
// console.log("getting data 1...");
// getData1(1, () => {
//     console.log("getting data 2...");
//     getData1(2, () => {
//         console.log("getting data 3...");
//         getData1(3, () => {
//             console.log("getting data 4...");
//             getData1(4);
//         });
//     });
// });

// ! 2 promise chaining
let getData2 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", data);
            resolve("sucess");
        }, 4000);
    });
}

// console.log("getting data 1...");
// getData2(1).then(() => {
//     console.log("getting data 2...");
//     return getData2(2);
// }).then(() => {
//     console.log("getting data 3...");
//     return getData2(3);
// }).then(() => {
//     console.log("getting data 4...");
//     return getData2(4);
// });


// ! 3 async await
let getData3 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", data);
            resolve("sucess");
        }, 4000);
    });
}

// async function myAsync() {
//     console.log("getting data 1...");
//     await getData3(1);
//     console.log("getting data 2...");
//     await getData3(2);
//     console.log("getting data 3...");
//     await getData3(3);
//     console.log("getting data 4...");
//     await getData3(4);
// }

// myAsync();

// ?? understanding async is easy but we need to create a function and then make a function call but it is a extra step
// ?to resolve this isuue we add IIFE

(async () => {
    console.log("getting data 1...");
    await getData3(1);
    console.log("getting data 2...");
    await getData3(2);
    console.log("getting data 3...");
    await getData3(3);
    console.log("getting data 4...");
    await getData3(4);
})();
// ! this is called as IIFE(Immediately invoke function expression)