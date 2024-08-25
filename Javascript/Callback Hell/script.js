'use strict';

// callback hell are a nested callbacks 
// ex suppose i want a function which print a statement after each 2 sec so this is a callback hell
//it is also called as pyramid of doom 

function callBackHell(data, callingNext) {
    setTimeout(() => {
        console.log("data:", data);
        if (callingNext) {
            callingNext();
        }
        else {
            console.log("all callback hell are done!")
        }
    }, 2000)//2sec
}
// ! it will not work beacuse each fn call counting its own timeout so each statement will call in a time 
/*
callBackHell(1);
callBackHell(2);
callBackHell(3);
*/

// ? correct way 
/*
callBackHell("data1", () => {
    callBackHell("data2", () => {
        callBackHell("data3", () => {
            callBackHell("data4")
        });
    });
});
*/

//to better understand
callBackHell("data1", () => {
    console.log("calling data 2 wait...");
    callBackHell("data2", () => {
        console.log("calling data 3 wait ..");
        callBackHell("data3", () => {
            console.log("calling data4");
            callBackHell("data4");
        });
    });
});