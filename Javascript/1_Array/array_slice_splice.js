//*slice(x,y) ==>x to y-1 index 
//*splice(x,y) ==>x to y index 

//!slice
let arr = [1, 2, 3, 4, 5, 6, 8, 9];
//?The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
//?Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. 
//?For example, -2 refers to the second to last element of the array.

console.log(arr.slice(2, 4)); // [ 3, 4 ]
console.log(arr.slice(5));  // [ 6, 8, 9 ] considering 5 as starting but goes till end
console.log(arr.slice());   //  [1, 2, 3, 4,5, 6, 8, 9] returning complete arrray if we dont pass anything
console.log(arr.slice(-3)); // [ 6, 8, 9 ] returns the last element if we pass - (it start count from last)
console.log(arr.slice(-5, 4)); // [ 4 ] it will start counting from end for - means array will be [1,2,3,4] now go till 4 (-5,4) array will came [4]
console.log(arr.slice(-5, 4)); // [ 4 ] it will start counting from end for - means array will be [1,2,3,4] now go till 4 (-5,4) array will came [4]
console.log(arr.slice(9));  // []
console.log(arr.slice(-10));  // [ 1, 2, 3, 4, 5, 6, 8, 9]

//!splice
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//0-9 index
/*
splice(start: number, deleteCount?: number): number[]
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted.
*/
//?1
// array.splice(1, 5);
// console.log(array); // [ 1, 7, 8, 9, 10 ] 2,3,4,5,6 are deleted

//?2
// array.splice(1, 5, 101, 102, 103, 104, 105);
// console.log(array); //[ 1, 101, 102, 103, 104, 105,   7,   8,   9,  10] 2,3,4,5,6 are deleted and 101..105 inserted

//?3
// array.splice();
// console.log(array); //[1, 2, 3, 4,  5, 6, 7, 8, 9, 10  ] it will return entire array

//?4
// array.splice(-5); 
// console.log(array); //[1, 2, 3, 4, 5 ] it will return array element exclude 5 elements from end

//?5
// array.splice(-5,-8,101,102,103,); 
// console.log(array); // [1, 2, 3, 4, 5, 101,102, 103, 6, 7, 8, 9, 10]

//?6
array.splice(-8, -5, 101, 102, 103,);
console.log(array); // [1, 2, 101,102, 103, 3, 4, 5, 6, 7, 8, 9, 10]


