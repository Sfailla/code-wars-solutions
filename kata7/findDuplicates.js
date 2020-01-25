function duplicates(arr) {
	let array = [];
	let dupes = [];

	arr.filter(val => {
		typeof val;
		if (array.indexOf(val) === -1) {
			array.push(val);
		} else {
			dupes.push(val);
		}
	});

	const answer = [ ...new Set(dupes) ];

	return answer;
}

console.log(
	duplicates([ 1, 2, 4, 4, 3, 3, 1, 5, 3, '5' ]).length === 3,
	'Nope, try again'
);
console.log(
	duplicates([ 0, 1, 2, 3, 4, 5 ]).length === 0,
	'Nope, try again'
);
console.log(
	duplicates([ '1', 2, 4, '4', 3, '3', 1, 5, 3, 3, 3, 3 ]).length ===
		3,
	'Nope, try again'
);
