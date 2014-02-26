/*
function myDog() {
	var dogName = 'Fido';
	console.log(dogName + ' says woof');
}

myDog();
*/// It is better to put your functions in the scope of the functions like this
// to avoid issues of unwanted global variables.
/*
function myDog() {
	var dogName = 'Fido'; // NOTE: it is important to put your variables at the top
	console.log(dogName + ' says woof');
}

myDog();
*/// NOTE: their is not a problem with the function
// 		  call happening before the function exists
//		  however, that could cause some additional
// 		  problems. Because of that you want to
// 		  declare all of your variables at the top of
// 		  the function scope.
// NOTE:  it is also better to put your functions at the
// 		  top of the scope because this is less confusing code.
/*
var dogName = 'Rover';

function myDog() {
	console.log(dogName + 'says woof');
};

myDog();
*//*
function myDog() {
	var dogName = 'Fido'; // NOTE: it is important to put your variables at the top
	console.log(dogName + ' says woof');
}

myDog();
*//*
function myDog() {
	var dogName = 'Fido';
	console.log(dogName);
};

myDog();
*//*
function myDog() {
	 var dogName = 'Fido';
	function otherDog() {
		var dogName = 'rover';
		console.log(dogName + ' says woof');
	}
	return otherDog();
};

myDog();
*//*
var ray = (function() {
	return {
		speak : function() {
			console.log('hello');
		}
	};
})();

console.log(ray.speak());
*/;