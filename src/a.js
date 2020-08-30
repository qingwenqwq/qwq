// 如何解决命名冲突和变量污染问题：
// 立即执行函数表达式
// (function(){

// })();
// 语法：  (函数体)(参数,参数2...)
// 
// 可以有自己的私有变量和私有函数，封闭空间，在里面可以写正常的代码
var a=10;
    var c=1;
    function aa(){
        console.log('来自a.js');
    }
    module.exports={
        c,
        aa
    };
// fun();