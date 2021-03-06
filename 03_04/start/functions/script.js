var ray = (function() {
	var DEFAULTS = {
		say : 'hello'
	};
	
	return {
		speak : function() {
			var myArguements = arguments[0] || '';
			var statement = myArguements.say || DEFAULTS.say;
			console.log(statement);
		}
	}
})();


/*
var ray = (function() {
	var DEFAULTS = {
		say : 'hello'
	};
	
	return {
		speak: function() {
			var myArguments = arguments[0] || '';
			var statement = myArguments.say || 'hello';
			console.log(statement);
		}
	}
})();
*/

/*
var DEFAULTS = {
	say : 'hello'
};


var ray = (function(){
	
	return {
		speak : function() {
			var myArguments = arguments[0] || '';
			var statement = myArguments.say || DEFAULTS.say;
			console.log(statement);
		}
	};
})(DEFAULTS);

console.log(ray.speak());
*/