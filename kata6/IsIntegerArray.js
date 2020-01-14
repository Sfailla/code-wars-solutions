function isIntArray(arr) {
	if (
		arr === null ||
		arr === undefined ||
		arr === NaN ||
		!Array.isArray(arr)
	)
		return false;

	// const isInt = n => n % 1 === 0;

	let filtered = arr.filter(val => {
		let isInt = Number.isInteger(val);
		if (!isInt) return false;
	});

	return filtered;
}

console.log(isIntArray([ 1.4, 4.7, -1.2 ]), false, 'Input: []');
// console.log(isIntArray([ 1, 2, 3, 4 ]), true, 'Input: [1, 2, 3, 4]');
// console.log(
// 	isIntArray([ 1, 2, 3, NaN ]),
// 	false,
// 	'Input: [1, 2, 3, NaN]'
// );
