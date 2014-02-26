/*
var speak = function(what) {
	console.log(this.normal);
	console.log(this.love);
};

var saySomething = {
	normal : "meow",
	love   : "purr"
};

speak.call(saySomething);
*//*
var speak = function(what) {
	console.log(this.normal);
	console.log(this.love);
};

var saySomething = {
	normal : "meow",
	love : "purr"
};

speak.call(saySomething, saySomething.normal);
*//*
var speak = function(what) {
	console.log(what);
	console.log(this.love);
};

var saySomething = {
	normal : "meow",
	love : "purr"
};

speak.call(saySomething, saySomething.normal);
*/var speak=function(e){console.log(e);console.log(this.love)},saySomething={normal:"meow",love:"purr"};speak.call(saySomething,["meouff"]);