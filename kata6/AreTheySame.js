// MY SOLUTION
function comp(array1, array2) {
	// do something
	if (!array1 || !array2 || array1.length !== array2.length)
		return false;

	let squared = array1.map(val => {
		let operation = val * val;
		return operation;
	});

	let result = array2.map(val => {
		let value = val * val;
		if (squared.indexOf(val) === -1) {
			return false;
		}
		return true;
	});

	const answer = result.includes(false) ? false : true;
	return answer;
}

a = [ 4, 4, 9 ];
b = [ 4, 9, 9 ];

console.log(comp(a, b));

// CODING GARDEN SOLUTION
function comp(array1, array2) {
	// run the arguments through all test cases that are false
	if (!array1 || !array2 || array1.length !== array2.length)
		return false;

	// create an object where the keys are the squared values and the
	// values are the amount of times they appear
	const squaredValues = array2.reduce((values, value) => {
		values[value] = values[value] || 0;
		values[value]++;
		return values;
	}, {});

	// iterate over the 1st array
	for (let i = 0; i < array1.length; i++) {
		const value = array1[i];
		const valueSqrd = value * value;
		// if the current value squared is not in the object
		if (!squaredValues[valueSqrd] || squaredValues[valueSqrd] === 0) {
			// return false;
			return false;
		} else {
			// decrease count
			squaredValues[valueSqrd]--;
		}
	}
	// if we made it out of the for loop return true;
	return true;
}

a = [ 121, 144, 19, 161, 19, 144, 19, 11 ];
b = [ 121, 14641, 20736, 36100, 25921, 361, 20736, 361 ];
console.log(comp(a, b));
