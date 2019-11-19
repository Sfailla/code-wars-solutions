console.log('sum of num');

function getSum(a, b) {
	// if a is equal to b we return a or b;
	if (a === b) {
		return a;
	} else {
		// Isolate the min and the max number in arguments
		let max = Math.max(a, b);
		let min = Math.min(a, b);
		// set an empty array to store the number sequence
		let result = [];
		// loop over all numbers in range and save to result array
		for (let i = min; i <= max; i++) {
			result.push(i);
		}
		// return the value of all the numbers in the range
		return result.reduce((acc, val) => {
			return val + acc;
		});
	}
}

console.log(getSum(4, 1));
