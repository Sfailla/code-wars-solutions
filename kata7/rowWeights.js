// Task
// Given an array of positive integers (the weights of the people),
// return a new array/tuple of two integers, where the first one is
// the total weight of team 1, and the second one is the total weight
// of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

function rowWeights(array) {
	let evenArr = [];
	let oddArr = [];

	const getTotal = arr => arr.reduce((acc, val) => acc + val, 0);

	array.map((val, idx) => {
		return idx % 2 === 0 ? evenArr.push(val) : oddArr.push(val);
	});

	return [ getTotal(evenArr), getTotal(oddArr) ];
}

// rowWeights([ 29, 83, 67, 53, 19, 28, 96 ]);
console.log(rowWeights([ 50, 60, 70, 80 ]), [ 120, 140 ]);
