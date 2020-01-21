function array_diff(a, b) {
	if (!a.length) return [];
	if (!b.length) return a;

	const array = a;

	let num = b.join('');
	const filtered = array.filter(val => {
		if (val === num) console.log(val);
	});

	filtered;

	return array;
}

// console.log(array_diff([], [4,5]), [], "a was [], b was [4,5]");
// console.log(array_diff([3,4], [3]), [4], "a was [3,4], b was [3]");
// console.log(array_diff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
console.log(array_diff([ 1, 2, 2, 2, 3 ], [ 2 ]), [ 1, 3 ]);
// console.log(array_diff([ 1, 2 ], [ 1 ]), [ 2 ]);
