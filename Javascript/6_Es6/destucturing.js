let arr=['suraj','sanjay','khot'];
console.log(arr); // [ 'suraj', 'sanjay', 'khot' ]
//destucturing arr to ==>
const [uName,mName,lName]=arr;
console.log(uName); // suraj
console.log(mName); // sanjay
console.log(lName); // khot


//usage swap element
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1
