String.prototype.isUpperCase = function() {
	return this.valueOf() === this.toUpperCase();
};

console.log(
	''.isUpperCase() !== undefined,
	'Must define the prototype isUpperCase'
);
console.log('c'.isUpperCase(), false, 'c is not upper case');
console.log('C'.isUpperCase(), true, 'C is upper case');
console.log(
	'hello I AM DONALD'.isUpperCase(),
	false,
	'hello I AM DONALD not is upper case'
);
console.log(
	'HELLO I AM DONALD'.isUpperCase(),
	true,
	'HELLO I AM DONALD is upper case'
);
console.log(
	'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(),
	false,
	'ACSKLDFJSgSKLDFJSKLDFJ not is upper case'
);
console.log(
	'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(),
	true,
	'ACSKLDFJSGSKLDFJSKLDFJ is upper case'
);
