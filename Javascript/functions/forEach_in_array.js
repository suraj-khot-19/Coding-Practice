arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach((element, index, arr) => {
    console.log("element: " + element + " at index: " + index + " arr: ", arr);
});
/*
element: 1 at index: 0 arr:  [ 1, 2, 3, 4, 5, 6, 7]
element: 2 at index: 1 arr:  [ 1, 2, 3, 4, 5, 6, 7]
element: 3 at index: 2 arr: [ 1, 2, 3, 4, 5, 6, 7]
element: 4 at index: 3 arr: [ 1, 2, 3, 4, 5, 6, 7]
element: 5 at index: 4 arr:  [ 1, 2, 3, 4, 5, 6, 7]
element: 6 at index: 5 arr: [ 1, 2, 3, 4, 5, 6, 7]
element: 7 at index: 6 arr:  [ 1, 2, 3, 4, 5, 6, 7]
*/

// it is a higher order fun (the fun witch iterate throw loop with a callback fun)

