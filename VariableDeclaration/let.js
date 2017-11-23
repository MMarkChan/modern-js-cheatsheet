/*
var和let几乎是相同的，但let定义的变量有如下特性：
1、块作用域
2、被赋值前不能被访问
3、在同一个作用域中不能重新定义
*/

// let person = "Nick";
// person = "John";
// console.log(person) // "John", reassignment is allowed with let


function myFunction() {
  let myVar = "Nick";
  if (true) {
    let myVar = "John";
    console.log(myVar); // "John"
    // actually, myVar being block scoped, we just created a new variable myVar.
    // this variable is not accessible outside this block and totally independent
    // from the first myVar created !
  }
  console.log(myVar); // "Nick", see how the instructions in the if block DID NOT affect this value
}
myFunction();
console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function.
