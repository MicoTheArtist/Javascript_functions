var speak=function(e){console.log(e)},Dog=function(){var e,t},Cat=function(){var e,t};Dog.prototype.speak=speak;Cat.prototype.speak=function(e){console.log(e)};firstDog=new Dog;firstDog.name="Rover";firstDog.breed="Doberman";firstDog.speak("woof");firstCat=new Cat;firstCat.name="Sniggles";firstCat.breed="Manx";firstCat.speak("meow");