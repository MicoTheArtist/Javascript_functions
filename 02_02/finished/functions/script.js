var Dog = function() {
  var name, breed;
  return console.dir(this);
  // notice that console.dir is different than console.log
}

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";

secondDog = new Dog;
secondDog.name = "Fluffy";
secondDog.breed = "Poodle"