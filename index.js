var program = require("commander");
var open = require("open");
var colors = require("colors");

program
	.version("0.0.5")
	.option("-t,--tieba [page]", "百度nodejs吧")
	.option("-c,--cnode [page]", "CNode社区")
	.option("-o,--official","nodejs官方网站")
	.option("-d,--doc","官方文档")
	.parse(process.argv);

//贴吧
if (program.tieba) {
	if (typeof program.tieba === "boolean") {
		console.log("%s : 正在打开百度nodejs吧 - 首页", "[贴吧]".green);
		open("http://tieba.baidu.com/f?kw=nodejs");
	}
	else {
		//贴吧,第十页 pn=450
		console.log("%s : 正在打开百度nodejs吧 - 第%s页", "[贴吧]".green, program.tieba.toString().yellow);
		open("http://tieba.baidu.com/f?kw=nodejs&pn=" + (program.tieba - 1) * 50);
	}
}

//cnode社区
if (program.cnode) {
	if (typeof program.cnode === "boolean") {
		console.log("%s : 正在打开CNode社区 - 首页", "[CNode]".green);
		open("http://cnodejs.org/");
	}
	else {
		console.log("%s : 正在打开CNode社区 - 第%s页", "[CNode]".green,program.cnode.toString().yellow);
		open("http://cnodejs.org/?page="+program.cnode);
	}
}

//官网
if(program.official){
	console.log("%s : 正在打开nodejs官网","[Node官网]".green);
	open("http://www.nodejs.org/");
}
//官方文档
if(program.doc){
	console.log("%s : 正在打开nodejs官方文档","[Node文档]".green);
	open("http://nodejs.org/api/");
}