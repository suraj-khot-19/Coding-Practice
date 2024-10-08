const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// finding even elements in array 
//method 1
let evenArr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        //New elements to add to the array.Appends new elements to the end of an array, and returns the new length of the array.
        evenArr1.push(arr[i]);
    }
}
console.log(evenArr1); //    [ 2, 4, 6, 8, 10 ]

//method 2
//Returns the elements of an array that meet the condition specified in a callback function.
let evenArr2 = arr.filter(n => { return n % 2 === 0 });

console.log(evenArr2); //    [ 2, 4, 6, 8, 10 ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//finding odd elements in the array
//method 1
let oddArr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        oddArr1.push(arr[i]);
    }
}
console.log(oddArr1);// [ 1, 3, 5, 7, 9 ]

//method 2
let oddArr2 = arr.filter((n) => { return n % 2 !== 0 });
console.log(oddArr2);// [ 1, 3, 5, 7, 9 ]
