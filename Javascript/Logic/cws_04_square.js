let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
}
console.log(arr); //[ 1, 4, 9, 16, 25, 36 ]
