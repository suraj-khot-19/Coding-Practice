//wihout using regix check vowels,num,special
const vowels = ['a', 'e', 'i', 'o', 'u'];
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['@', '$', '_', '-', '/'];

let valid = false;
let password = "a0$";

password = password.toLowerCase();

let isVowels = false;
let isNum = false;
let isSpecial = false;

for (let i = 0; i < password.length; i++) {
    const ch = password[i];
    if (vowels.includes(ch)) {
        isVowels = true;
    }
    if (num.includes(ch)) {
        isNum = true;
    }
    if (special.includes(ch)) {
        isSpecial = true;
    }
    if (isVowels && isNum && isSpecial) {
        valid = true;
        break;
    }
}

valid ? console.log("Password is Valid") : console.log("Password must contain 1 vowels,1 special char,1 number");
