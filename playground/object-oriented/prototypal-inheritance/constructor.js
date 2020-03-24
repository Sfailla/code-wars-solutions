// when constructor function is created it is automatically given
// a prototype property equal to a empty object.  // Foo {}
// by default the only property available is the .constructor property

function Foo() {
	// ...
}

Foo.prototype = {};

Object.defineProperty(Foo.prototype, 'constructor', {
	enumerable: false,
	writable: true,
	configurable: true,
	value: Foo
});

console.log(Foo.prototype.constructor);

const a = new Foo();
console.log(a.constructor === Foo);
console.log(a.constructor === Object);
