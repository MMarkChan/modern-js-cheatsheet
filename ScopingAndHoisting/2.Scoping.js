/*
对于JavaScript新手来说，最大的迷惑源自作用域. 实际上，不只是新手，许多有经验的JavaScript开发者也不完全理解作用域。
JavaScript中的作用域如此困惑的原因是它看起来太像C族系的语言,请看如下C程序：
#include <stdio.h>
int main() {
	int x = 1;
	printf("%d, ", x); // 1
	if (1) {
		int x = 2;
		printf("%d, ", x); // 2
	}
	printf("%d\n", x); // 1
}
上面的C程序的输出是1,2,1。因为C和其它的C族系语言的作用域是代码块级别。当控制进入代码块时，例如if语句块内可定义新的变量，而不会影响
语句块外的变量。但在JavaScript中则不是这样的：
var x = 1;
console.log(x); // 1
if (true) {
	var x = 2;
	console.log(x); // 2
}
console.log(x); // 2
上面的JavaScript输出是1,2,2，因为JavaScript的作用域是函数级别。这与C族系语言完全不同。在if这样的语句块中是不会创建新作用域的，只有函数才会创建新作用域。
对于习惯了C/C++/C#/Java的开发者来说，这不是预期的且不受欢迎的行为。所幸的是，由于JavaScript函数的灵活性，存在变通方案可用。如果在函数中必须创建临时性作用域，可以这样处理：
function foo() {
	var x = 1;
	if (x) {
		(function () {
			var x = 2;
			// some other code
		}());
	}
	// x is still 1.
}
这种方法非常灵活，不单只应用在语句块内，还可以应用于任何需要临时作用域的地方。
深入理解JavaScript的作用域，有助于理解变量提升。

*/

function foo() {
	var x = 1;
	if (x) {
		(function () {
			var x = 2;
			// some other code
		}());
	}
	// x is still 1.
	console.log(x);
}

foo();
