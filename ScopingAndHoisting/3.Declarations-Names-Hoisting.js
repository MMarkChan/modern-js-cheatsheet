/*
在JavaScript中，名称进入作用域有四种基础方式：
1、语言定义：所有的作用域默认都会给定this和arguments这两个名称
2、形式参数：函数可以带有形式参数，它们的作用域是此函数的函数体
3、函数声明：类似"function foo(){}"
4、变量声明：类似"var foo;"

JavaScript解释器总是把函数声明和变量声明隐式地移动到它们所在作用域的顶部。
函数参数及语言定义的名称通常已经在作用域的顶部，例如：
function foo() {
	bar();
	var x = 1;
}
以上代码实际上会被解释为如下代码：
function foo() {
	var x;
	bar();
	x = 1;
}
实际上包含声明的那一行是否被执行是不关紧要的。以下函数：
function foo() {
	if (false) {
		var x = 1;
	}
	return;
	var y = 1;
}
等同于：
function foo() {
	var x, y;
	if (false) {
		x = 1;
	}
	return;
	y = 1;
}
以上代码的赋值部分并没有被提升，只是提升了名称。而函数声明则不同，函数及函数体都会被提升。
有两种正式的方式声明函数：
function test() {
	foo(); // TypeError "foo is not a function"
	bar(); // "this will run!"
	var foo = function () { // function expression assigned to local variable 'foo'
		console.log("this won't run!");
	}
	function bar() { // function declaration, given the name 'bar'
		console.log("this will run!");
	}
}
test();
上面的代码在执行的时候，只有函数声明会和函数体一并提升到作用域的顶部，而变量foo的声明被提升到了作用域顶部，
但变量的赋值部分并没有被提升。

 以上代码就涵盖了提升的基础内容，并不像它表面上看起来那么复杂。
*/
