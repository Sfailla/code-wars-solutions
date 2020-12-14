function sumArray(array) {
	return !array || array.length < 3
		? 0
		: array
				.sort((a, b) => b - a)
				.slice(1, array.length - 1)
				.reduce((acc, num) => acc + num);
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]), 16);
console.log(sumArray([ 1, 1, 11, 2, 3 ]), 6);
