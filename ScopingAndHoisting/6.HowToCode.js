/*
理解了作用域和提升后，对使用JavaScript进行编码的启示：
1、最重要的是使用一个var语句声明变量，强烈建议在一个作用内只使用一个var语句，且要放到作用域顶部。
如果强制自己这样做的好处是不再有提升相关的困扰。但这样做很难追踪当前作用域内都声明了哪些变量。推荐使用
JSLint的onevar选项来强制执行这一点。这样做之后，代码应该类似下面这样：
/*jslint onevar: true [...] */
function foo(a, b, c) {
    var x = 1,
    	bar,
    	baz = "something";
}
*/
