var calc = {
	status: 'Awesome',
	plus: function(a,b) {
		return (
			console.log(this),
			console.log(a+b),
			console.log(arguments),
			console.log(this.status)
		)
	}
};

calc.plus(2,2);

/*
var info = {
	full_name : "Ray Villalobos",
	title : "Staff Author",
	links : [
		{ blog : "http://iviewsource.com" },
		{ twitter : "http://twitter.com/planetoftheweb" }
	]
};
*/