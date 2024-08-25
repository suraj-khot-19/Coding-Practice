const btn1 = document.querySelector("#fetch1");
const p1 = document.querySelector('#p1');
const btn2 = document.querySelector("#fetch2");
const p2 = document.querySelector('#p2');

const url = 'https://jsonplaceholder.typicode.com/posts';

///using async await 
const fetchApi1 = async () => {
    p1.innerText = "Loading...";
    const response = await fetch(url);
    const data = await response.json();
    p1.innerText = data[0].title;
}
btn1.addEventListener("click", fetchApi1);

// using promises
const fetchApi2 = () => {
    p2.innerText = "Loading...";
    fetch(url).then((res) => { return res.json() }).then((data) => {
        p2.innerText = data[0].title;
    }).catch(error => console.log(error));
}
btn2.addEventListener("click", fetchApi2);