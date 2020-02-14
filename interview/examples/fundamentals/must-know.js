// ADD ELEMENT TO BEGINNING AND END OF ARRAY

// ES5
var myArray = [ 'a', 'b', 'c', 'd' ];
// to add an element to beginning of array
myArray.unshift('start');
// to add an element to end of array
myArray.push('end');

myArray = [ 'a', 'b', 'c', 'd' ];

// ES6
// to add an element to beginning of array
myArray = [ 'start', ...myArray ];
// to add an element to end of array
myArray = [ ...myArray, 'end' ];
// reset array
myArray = [ 'a', 'b', 'c', 'd' ];

myArray = [ 'start', ...myArray, 'end' ];

// HOW TO CREATE PRIVATE VARIABLES

function secretVariable() {
	// by createing a seperate internal function
	// it will be hidden from the main function
	const private = 'super secret code';

	return function() {
		return private;
	};
}

// by running secretVariable() it will return a function. not the secret
secretVariable(); // [function]
// only when the function is reassigned will the internal function run
let secret = secretVariable();
secret(); // super secret code

// WHAT IS THE OUTPUT?
// JAVASCRIPT GOTCHAS

var num = 4;
function outer() {
	var num = 2;
	function inner() {
		num++;
		var num = 3;
		console.log(num);
	}
	inner();
}
outer(); // return 3 because of scope and hoisting

// this is due to order of operations.  (typeof (typeof 1));
console.log(typeof typeof 1); // returns string
// (typeof 1) = number.. and (typeof number) = String

const hero = {
	_name: 'John Doe',
	getSecretIdentity: function() {
		return this._name;
	}
};

// const stolenSecretIdentity = hero.getSecretIdentity;

const stolenSecretIdentity = hero.getSecretIdentity.bind(hero);

stolenSecretIdentity(); // returns undefined unless hero gets bound

hero.getSecretIdentity(); // returns John Doe
