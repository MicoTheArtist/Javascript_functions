// This is a self contained function or an anonymous closure
// This is very important when you have a self contained contruct like a module
(function() {
  console.log('foo');
})(); // the parenthasis here helps the function invoke itself

// console.log(a); // NOTE: this doe not get called because
				    //       it is in a self contained construct