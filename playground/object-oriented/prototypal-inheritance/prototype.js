// Objects are linked together thru their prototype chain

const obj = {
	firstName: 'Steve'
};

const protoObj = {
	lastName: 'Failla'
};

// certain properties are available to all objects due to
// the prototype chain.  ex... toString(), hasOwnProperty(), etc.

// lastName is not a property of obj. so we can create a prototype obj
// and link them here below
Object.setPrototypeOf(obj, protoObj);

// now the lastName prop will be applied once it is found on the prototype chani
console.log(obj.lastName);
// javascript doesn't have classes so it uses prototypes instead
// using prototype to save memory and cpu with factory functions
// BAD
function personFactory(firstName, lastName) {
	return {
		firstName,
		lastName,
		greet: function() {
			return `Hello, ${firstName} ${lastName}`;
		}
	};
}

const steve = personFactory('Steven', 'Failla');
const maria = personFactory('Maria', 'Failla');
// although this works fine, it creates a new function/object everytime
// its invoked. so not so good in larger applications
steve.greet(); // Hello, Steven Failla
maria.greet(); // Hello, Maria Failla
steve.greet() === maria.greet(); // false... they are 2 diff objects

// GOOD
// to not pollute global namespace we can wrap in an IIFE
let personFactory = (function() {
	let personPrototype = {
		greet: function(person) {
			return `Hello, ${person.firstName} ${person.lastName}`;
		}
	};

	return function(firstName, lastName) {
		let person = Object.create(personPrototype, {
			// we want read-only so writable: false
			firstName: { writable: false, value: firstName },
			lastName: { writable: false, value: lastName }
		});

		return person;
	};
})();

const steve = personFactory('Steve', 'Failla');
const maria = personFactory('Maria', 'Failla');

console.log(steve.greet(steve), 'Hello, Steve Failla');
console.log(steve.greet === maria.greet, true);
