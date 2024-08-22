//used to combine things
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [...arr];
console.log("copied array haaaa ", arr2);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let myarr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myarr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mycombinedarr = [...myarr1, ...myarr2];//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("copied array1 and 2 haaaa ", mycombinedarr);

// The spread operator is often used in combination with destructuring.
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [one, two, ...rest] = n;
console.log(one);//1
console.log(two);//2


const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }
console.log(myUpdatedVehicle); //color get changed with new
/*
{
    brand: 'Ford',
    model: 'Mustang',
    !color: 'yellow',
    type: 'car',
    year: 2021
}
*/