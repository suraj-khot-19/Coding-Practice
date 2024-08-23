'use strict';
//! getElementById
//?=>Returns a reference to the first object with the specified value of the ID attribute
const a = document.getElementById('div1');
console.log(a);//html element dom tree
console.dir(a);//object

// !getElementsByClassName=>
//?Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
const b = document.getElementsByClassName('divClass');
console.log(b);//html collection
console.dir(b);//html collection

//!getElementsByTagName=> return ***all element by tag name
// ?Retrieves a collection of objects based on the specified element name.
const c = document.getElementsByTagName('div');
console.log(c);//html collection
console.dir(c);//html collection

// !querySelector=> retun ***first element in dom tree
//?Returns the first element that is a descendant of node that matches selectors.
const d = document.querySelector('.divClass');
console.log(d);
console.dir(d);

// !querySelectorAll==> etun ***all element in dom tree
// ?Returns all element descendants of node that match selectors.
const e = document.querySelectorAll('.divClass');
console.log(e);//node list
console.dir(e);//node list