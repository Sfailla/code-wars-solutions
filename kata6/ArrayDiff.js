function array_diff(a, b) {
	if (!a.length) return a;
	if (!b.length) return a;

	return a.filter(val => !b.includes(val));
}

console.log(array_diff([], [ 4, 5 ]), [], 'a was [], b was [4,5]');
console.log(array_diff([ 3, 4 ], [ 3 ]), [ 4 ], 'a was [3,4], b was [3]');
console.log(array_diff([ 1, 8, 2 ], []), [ 1, 8, 2 ], 'a was [1,8,2], b was []');
console.log(array_diff([ 1, 2, 2, 2, 3 ], [ 2 ]), [ 1, 3 ]);
console.log(array_diff([ 1, 2 ], [ 1 ]), [ 2 ]);
