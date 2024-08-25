'use strict';
//!simple js event
//returns the first element that is a descendant of node that matches selectors.
const btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    console.log("btn is clicked");
}

const div1 = document.querySelector('#div1');
div1.onmouseover = (e) => {
    console.log("type", e.type);
    console.log("you howered div")
}
//the above method allow us to use only one function inside

//!event listners
//so we ussing event listner
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    console.log("btn is cliked");
});

//!add remove event listners
//so to add and remove evennt listners we need setup like this
const fun = () => {
    console.log("I am arrow function called when you click on btn");
}
btn.addEventListener('click', fun);
btn.removeEventListener('click', fun);

////!things to keep in mind
// if we add inline event and js event to both on one node //?then js event will called
const multievent = document.querySelector('.multievent');
multievent.onclick = () => {
    console.log('btn is cliked but using js event');
}

//if we add js event and event listner on one node //?then also both event triggerd
const fun2 = () => {
    console.log('btn is cliked but using 1 event listners');
}
const fun3 = () => {
    console.log('btn is cliked but using 2 event listners');
}
multievent.addEventListener('click', fun2);
//if we add two event listner fun on one node //?then both are called
multievent.addEventListener('click', fun3);

// exersize theme changer

//!1 using js
const switcher = document.querySelector('#changeTheme');
let theme = 'light';
const changeMode = () => {
    if (theme === 'light') {
        document.body.style.color = 'black'
        document.body.style.backgroundColor = 'white';
        theme = 'dark';
        console.log(theme);
    } else {
        document.body.style.color = 'white'
        document.body.style.backgroundColor = 'black';
        theme = 'light';
        console.log(theme);
    }
}
switcher.addEventListener('click', changeMode);

//!2 using js and css
const cssTheme = document.querySelector('#changeCssTheme');
let mode = 'light';
const change = () => {
    if (mode === 'light') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        mode = 'dark';
        console.log(mode);
    } else {
        
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        mode = 'light';
        console.log(mode);
    }
}
cssTheme.addEventListener('click', change);