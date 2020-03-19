function add(a, b) {
	return b => {
		return a + b;
	};
}

function subtract(a, b) {
	return b => {
		return a - b;
	};
}

function multiply(a, b) {
	return b => {
		return a * b;
	};
}

function apply(fn) {
	return fn;
}

console.log(add(3)(4), 7);
console.log(subtract(3)(4), -1);
console.log(multiply(3)(4), 12);

console.log(apply(multiply(3)(4)), 12);
