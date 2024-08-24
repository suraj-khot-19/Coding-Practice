// !question select h1 and append that text with any text
//<h1 id="h1">My Name is Suraj</h1>
let x = document.getElementById('h1');
x.innerText += ", I am React Developer"; //My Name is Suraj, I am React Developer
x.innerText = "Hello, " + x.innerText; //Hello, My Name is Suraj, I am React Developer

// ! cerate 3 div with commman class name "box" and add some unique features to them
let div = document.getElementsByClassName("box");
//?div.innerText = "Hello i am 0 div"; 
//?will not work cause getElementsByClassName return array not single value
// div.length provide use a lenght //!not div.item.length
for (let i = 0; i < div.length; i++) {
    div[i].innerText = `${i}th div and I have unique value of div ${i}`;
}
