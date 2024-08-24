const a = document.getElementById("myDivId");
//!getAttribute ==> 
// ?Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.(also change in elements in broweser)
console.log(a.getAttribute('name'));//myDivName
console.log(a.getAttribute('id'));//myDivId

// !setAttribute ==>
// ?Sets the value of element's first attribute whose qualified name is qualifiedName to value.(also change in elements in broweser)
const b = document.getElementById("div");
console.log(b.getAttribute('name')); //mydiv
// changing attr
b.setAttribute('name', 'newName');
console.log(b.getAttribute('name'));//newName

// !style ==> 
// ?return inline style also we can change it 
const c = document.getElementById('div-ul');
console.log(c.style);//return inline style
c.style.backgroundColor = 'yellow';
c.style.border = "2px solid black";
// c.style.visibility = "hidden";  //also hide 

// we can insert elements using js only
//! create element ==> Creates an instance of the element for the specified tag.
let p1 = document.createElement("p");
p1.innerHTML = "<p>I Am <b>Appended</b> By Js </p>";

// ! append ==>
// ! Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
c.append(p1);

// ! prepend ==>
// ! Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
p2 = document.createElement("p");
p2.innerHTML = "<p> i am <b>Prepended</b>  by js</p>"
c.prepend(p2);

// ! after ==>
// !Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
let p3 = document.createElement("p");
p3.innerHTML = "<p>I am inserted with <b>after</b> by js</p>"
c.after(p3);

// ! before ==>
// ! Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
let p4 = document.createElement("p");
p4.innerHTML = "<p>I am inserted with <b>before</b> by js</p>"
c.before(p4);

// ! remove ==>
// ! Removes node.
let p5 = document.createElement("p");
p5.innerHTML = '<p>I wll be removed by js after</p>'
c.append(p5);
p5.remove();