function remove(str, n) {
	return str.slice(0, str.length - n);
}

console.log(remove('Hi!', 1));
console.log(remove('Hi!!!', 3));
