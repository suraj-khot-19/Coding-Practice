// how to show how many vowels are present in string 
const vowels = ['a', 'e', 'i', 'o', 'u'];
const s = "Jay shree Ram Radhe Radhe";
let count = 0;
s.toLowerCase().split("").forEach((ch) => {
    vowels.includes(ch) && count++;
});
console.log(count);

//output
/*
PS D:\Workspace\Coding-Practice\logic> node vowels.js
8
*/