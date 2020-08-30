var moduleA=require("./a.js");
var moduleB=require("./b.js");
moduleA.aa();
moduleB.bb();

function min(){
	console.log("来自min.js");
};

min();

require('./assets/style.css')
