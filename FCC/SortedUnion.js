function uniteUnique(arr) {
	let args = arguments;
	let argsArray = [];

	for (const arg of args) {
		if (arg.length && Array.isArray(arg)) {
			argsArray.push(arg);
		}
	}

	let flatArray = argsArray.reduce(
		(acc, items) => acc.concat(items),
		[]
	);

	const noDupes = [ ...new Set(flatArray) ];

	return noDupes;
}

console.log(uniteUnique([ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ]), [
	1,
	3,
	2,
	5,
	4
]);
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8]);
