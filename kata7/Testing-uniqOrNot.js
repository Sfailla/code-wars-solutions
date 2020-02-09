function testit(a, b) {
	let finalArr = [];
	finalArr = a;
	b.map(val => {
		if (finalArr.indexOf(val) === -1) {
			finalArr.push(val);
		} else {
			finalArr = a.concat(b);
			finalArr.sort();
		}
	});

	return finalArr;
}

console.log(testit([ 0 ], [ 1 ]), [ 0, 1 ], '');
console.log(testit([ 1, 2 ], [ 3, 4 ]), [ 1, 2, 3, 4 ], '');
console.log(testit([ 1 ], [ 2, 3, 4 ]), [ 1, 2, 3, 4 ], '');
console.log(testit([ 1, 2, 3 ], [ 4 ]), [ 1, 2, 3, 4 ], '');
console.log(testit([ 1, 2 ], [ 1, 2 ]), [ 1, 1, 2, 2 ], '');
