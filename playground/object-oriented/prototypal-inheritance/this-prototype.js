'use strict';

// UNDERSTANDING THIS KEYWORD WITHIN PROTOTYPES

function Foo(name) {
	this.name = name;
}

Foo.prototype.myName = function() {
	return this.name;
};

function Bar(name) {
	// Foo(name)
	// we have to call and apply this to obj to rebind this
	Foo.call(this, name);
}

// we can get a.myName to access Foo prototype by linking the two.
Bar.prototype = Object.create(Foo.prototype);

const a = new Bar('Steve');

// because myName is not a prop on the Bar obj. a.myName() throws an err.
console.log(a.myName());
