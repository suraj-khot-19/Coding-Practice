// the funtion wait for a while but without disturbing any other statements

function fn(time) {
    console.log(`hello i will called after ${time}`);
}
setTimeout(() => fn(0.5), 500);//2
setTimeout(() => fn(0.1), 100);//1
setTimeout(() => fn(1.5), 1500);//4
setTimeout(() => fn(1), 1000);//3
console.log("haaaa i will print first");
// so this is a async nature

// api calls are also an async fn