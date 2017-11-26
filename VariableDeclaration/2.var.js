/*
var的作用域是函数
var提升：var声明的变量在运行时会被移动到执行作用域的顶部

*/

/*
var作用作用域 （一）
*/
// function myFunction() {
//   var myVar = "Nick";
//   console.log(myVar); // "Nick" - myVar is accessible inside the function
// }
// console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function.

/*
var作用作用域 （二）
*/
// function myFunction() {
//   var myVar = "Nick";
//   if (true) {
//     var myVar = "John";
//     console.log(myVar); // "John"
//     // actually, myVar being function scoped, we just erased the previous myVar value "Nick" for "John"
//   }
//   console.log(myVar); // "John" - see how the instructions in the if block affected this value
// }
// myFunction();
// console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function.


/*
var提升：var声明的变量在运行时会被移动到执行作用域的顶部 (一)
*/
// console.log(myVar) // undefined -- no error raised
// var myVar = 2;

/*
var提升：var声明的变量在运行时会被移动到执行作用域的顶部 (二)
*/
// var myVar;
// console.log(myVar) // undefined -- no error raised
// myVar = 2;
