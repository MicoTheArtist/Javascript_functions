var speak = function(saywhat) {
	console.log(saywhat);
};

var Dog = function() {
	var name, breed;
};

var Cat = function() {
	var name, breed;
};

Dog.prototype.speak = speak; // adding the speak method to the dog
Cat.prototype.speak = function(saywhat) {console.log(saywhat); }; // adding the speak method to the cat
	// NOTE: prototyping makes it possible to expand anyting we want in javascript

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";
firstDog.speak('woof');
	// NOTE: in the console we can type "firstDog" to look at it's instance
firstCat = new Cat;
firstCat.name = "Sniggles";
firstCat.breed = "Manx";
firstCat.speak('meow');
	// NOTE: he did what is below in the console to show us an object
		// var myThing = {};
		// myThing
		// console.dir(myThing)
