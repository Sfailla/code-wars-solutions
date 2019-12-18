function generateRange(min, max, step) {
	// create variable for answer
	let result = [];
	// create for loop with min and max values
	for (let i = min; i <= max; i++) {
		// set variable for number range
		let range = i;
		// store values in array
		result.push(range);
	}
	// set a variable to minimum value
	let sum = min;
	// reduce to make array with necessary values
	let sumOfRange = result.reduce(
		(acc, val) => {
			// increase the sum with the step
			sum += step;
			// add values that are less than the max
			if (sum <= max) {
				acc.push(sum);
			}
			// otherwise return accumulator
			return acc;
		},
		// set array initial value to the min number
		[ min ]
	);
	// return array
	return sumOfRange;
}

console.log(generateRange(2, 10, 5), [ 2, 7 ]);
console.log(generateRange(2, 10, 2), [ 2, 4, 6, 8, 10 ]);
console.log(generateRange(1, 10, 3), [ 1, 4, 7, 10 ]);
