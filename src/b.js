// var a=10;
// function aa(){
//     console.log(11);
// }
// var moduleB=(function(){
    var a=10;
    var c=1;
    function bb(){
        console.log('来自b.js');
    }
    module.exports={
        c,
        bb
    };
// })();
/*
好处：
            1、可创建私有作用域（变量，函数）避免命名冲突
            2、能实现模块的开发

 */