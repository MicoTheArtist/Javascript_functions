var plus = function() {
	var sum = 0;
	for (var i=0; i<arguments.length; i++) { // NOTE: arguments is a special array like parameter than we can pass
		sum += arguments[i];
	};
	return sum;
};

console.log(plus(2,2,2,3,2,3,4));

/*
var plus = function() {
  var sum =  0;
  for (var i = arguments.length - 1; i >= 0; i--) {
    sum += arguments[i];
  };
  return sum;
}

console.log(plus(2,2,2,3,2,3,4));
*/