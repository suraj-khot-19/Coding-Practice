const arrowFun1 = () => {
    console.log("Hello I Am Arrow Fun without an argument");
}
const arrowFun2 = () => {
    "Hello I Am Arrow Fun without an argument and without return";
}
const arrowFun3 = () => {
    return "Hello I Am Arrow Fun without an argument and with return";
}
const arrowFun4 = (arg) => {
    console.log("Hello I Am Arrow Fun with an argument:", arg);
}

arrowFun1();
console.log(arrowFun2())
console.log(arrowFun3())
arrowFun4(25)
/*
Hello I Am Arrow Fun without an argument
undefined
Hello I Am Arrow Fun without an argument and with return
Hello I Am Arrow Fun with an argument: 25
*/

const arrowFun5 = () => console.log("Hello I Am Arrow Fun without an argument and without an {}");
const arrowFun6 = () => "Hello I Am Arrow Fun without an argument, without return and without {}";
//! const arrowFun7 = () => return "Hello I Am Arrow Fun without an argument and with return"; //! {' expected.
const arrowFun8 = (arg) => console.log("Hello I Am Arrow Fun with an argument:", arg);
const arrowFun9 = (arg) => console.log("Hello I Am Arrow Fun with an argument:", arg); console.log("hii i am 2nd statement "); //! secound st not print haaaa

arrowFun5();
console.log(arrowFun6())
arrowFun8(25)
arrowFun9(25)
/*
Hello I Am Arrow Fun without an argument and without an {}
Hello I Am Arrow Fun without an argument, without return and without {}
Hello I Am Arrow Fun with an argument: 25
Hello I Am Arrow Fun with an argument: 25
*/

// 	Example
// 	Arrow Functions Return Value by Default:
// 	Note: This works only if the function has only one statement.
hello1 = () => "Hello World!";
// 	Arrow Function With Parameters:
hello2 = (val) => "Hello " + val;
// 	In fact, if you have only one parameter, you can skip the parentheses as well:
// 	Example
// 	Arrow Function Without Parentheses:
hello3 = val => "Hello " + val;

console.log(hello1());
console.log(hello2(2));
console.log(hello3(2));
/*
Hello World!
Hello 2
Hello 2
*/