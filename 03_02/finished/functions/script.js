var ray = (function() {

  return {
    speak: function() {
      console.log('hello');
    }
  };
})();


// note: getting rid of the "var" infront of a variable inside of 
//  	  a function makes that variable work outside of that function as
// 		  a global.

/*
function myDog() {
	var dogName = 'Fido';
	function otherDog() {
		var dogName = 'Rover';
		console.log(dogName + ' says woof');
	}
	otherDog();
}

myDog();

// note: this shows that the variable inside the otherDog()
// scope will chain go outside of the scope and use the "var dogName = 'Fido' " variable
*/
