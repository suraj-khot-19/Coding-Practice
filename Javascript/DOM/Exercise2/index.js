// ! 1=>create a btn element give text "click me", bg color red and text color white insert it as first element inside a body tag

// create element
let ex1 = document.createElement("button");
ex1.innerText = "Click Me!";
ex1.style.backgroundColor = "red";
ex1.style.color = "white";

// select body
let body = document.querySelector("body");

// prepend as first
// ? append ==>after  prepend==>before
body.prepend(ex1);


// ! create <p> tag in html give class and some styling
//  <p class="p" style="font-weight: bold;font-family: serif; text-decoration: wavy; color: blueviolet;">I am paragraph tag</p>
// ! now create a new class in css 
/*
    .newClass {
    font-weight: 100;
    font-size: large;
    flex-wrap: inherit;
    text-decoration: line-through;
    color: chocolate;
}
*/
// ! and append this class to <p> tag

// way 1==> remove 1st class and add newClass to p1
let x = document.querySelector(".p1");
x.setAttribute("class", "newClass");
// ? but it will remove all p1 class properties whyyy?
console.log(x.classList);//0:"newClass"

// way 2==>
let a = document.querySelector('.p2');
a.classList.add("newClass");
// ? it will not remove all p2 class properties, it will have p2 and newClass property bot whyyy?
console.log(a.classList);//0:"p2", 1:"newClass"