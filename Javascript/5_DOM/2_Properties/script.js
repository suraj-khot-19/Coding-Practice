// !because window is present gloablly if we want we mention 
console.log("hello");//hello
window.console.log("hello");//hello

console.log("children property : ", document.querySelector("#div").children);
// HTMLCollection
// h1 h2 ul

//!Returns the first child that is an element, and null otherwise.
const b = document.querySelector("#div").firstElementChild;
console.log("firstElementChild property : ", b);   //<h1>first h1</h1>

//!Returns the last child that is an element, and null otherwise.
const c = document.querySelector('#div').lastElementChild;
console.log("lastElementChild property : ", c);    //<ul>....</ul>

//!return inner text in a tag
console.log("innerText property : ", b.innerText)//first h1
console.log("innerText property : ", c.innerText)//list1 list2 list3 list4

//!return all html code writen in id div as it is in our index.html
console.log("innerHTML property : ", document.querySelector('#div').innerHTML);

// !given textual content even for hidden element
console.log("textContent property : ", document.querySelector('#div').textContent);

// !we can change any data written in the code(indeex.html) by using this properties
//changing h1 by script using innerHTML
const x = document.getElementById("h11");
x.innerHTML = "<h1 id='h11'>This is changed by js</h1>"
// changing h2 by using innerText
const y = document.getElementById('h22');
y.innerText = "I am changed by Js Inner Text Propert";

// !with help of inner text or any property we can access hidden element also
// present it in index.js=>         <h2 style="visibility: hidden;" id="hidden">I am hidden</h2>

let hidden = document.getElementById('hidden');
console.log("hidden using innerText: ", hidden.innerText); //empty haaaaaa //!not work it not allow us to disply hidden
console.log("hidden using innerHTML: ", hidden.innerHTML);//i am hidden //?works
console.log("hidden using textContent: ", hidden.textContent);//i am hidden //?works
