/* 
var plus = function(a, b) {
	if (a>b) {
		return;
	} else {
		var a = 1;
	}
	return a;
};
*/

// Note: this can be written like above
//   	  or this can be written like below without the semicolons

var plus = function(a, b) {
	if (a>b)
		return
	else
		var a = 1
	return a
};


console.log(plus(2,2));