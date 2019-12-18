function sumDigits(number) {
	// return a array of string numbers split by each digit
	return (
		[ ...number.toString() ]
			// filter array to get rid of non integer values
			.filter(val => val !== '-')
			// reduce the array to get sum of all numbers in array
			.reduce((acc, val) => acc + parseInt(val), 0)
	);
}

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
