//ES5 Version
function Person(firstName, lastName, age, address) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.address = address;
}

Person.self = function() {
	return this;
};

Person.prototype.toString = function() {
	return '[object Person]';
};

Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName;
};

//ES6 Version
class Person {
	constructor(firstName, lastName, age, address) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.age = age;
		this.address = address;
	}

	static self() {
		return this;
	}

	toString() {
		return '[object Person]';
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}
