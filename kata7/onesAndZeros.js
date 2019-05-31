// Given an array of ones and zeroes, convert the equivalent binary
// value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation
// of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
	// your code

	var total = 0;
	for (var i = arr.length - 1; i > -1; i--) {
		if (arr[i] === 1 && i === arr.length - 1) {
			total += 1;
			console.log('first', i);
			console.log('first total', total);
		} else if (arr[i] === 1) {
			total += Math.pow(2, arr.length - 1 - i);
			console.log('i', i);
			console.log('total', total);
		}
	}
	console.log(total);
	return total;
};

binaryArrayToNumber([ 0, 0, 0, 1 ]); // 1
