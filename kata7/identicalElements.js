function duplicateElements(m, n) {
	// Write your solution here.

	let array1 = m,
		array2 = n,
		array = [];

	for (let i = 0; i < array1.length; i++) {
		const el = array1[i];
		if (array2.includes(el)) {
			array.push(el);
		}
	}

	return array.length ? true : false;
}

console.log(
	duplicateElements([ 1, 2, 3, 4, 5 ], [ 1, 6, 7, 8, 9 ]),
	true
);
console.log(duplicateElements([ 9, 8, 7 ], [ 8, 1, 3 ]), true);
