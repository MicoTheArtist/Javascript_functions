var ray = (function() {
  var DEFAULTS = {
    say: 'hello',
    speed: 'normal'
  }

  return {
    speak: function() {
      var myArguments = arguments[0] || '';
      var statement = myArguments.say || DEFAULTS.say;
      console.log(statement);
      return this; // this calls the object itself keeping the action from ending, and allows for the chaining effect that we use here
    },
    run : function() {
      var myArguments = arguments[0] || '';
      var running = myArguments.speed || DEFAULTS.speed;
      console.log('running...'+ running);
      return this;
    }
  };
})();



/* This one is mine and it is very cool
var openWindow = (function() {
	var DEFAULTS = {
		say: 'Say What',
		speed: 'How Fast'
	}
	
	var AddClass  = {
		addAnimClass :  function() {
			var theBody = document.querySelector("body");
			theBody.className = "testing";
		},
		addSecondAnimClass :  function() {
			var theBody = document.querySelector("body");
			theBody.className = "anotherTest";
		}
	};
	
	return { // controller
		speak : function() {
			window.addEventListener('load', AddClass.addAnimClass, false);
			return this;
		},
		secondOne : function() {
			window.addEventListener('load', AddClass.addSecondAnimClass, false);
			return this;
		}
	};
})();

openWindow.speak();
*/