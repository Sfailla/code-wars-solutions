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
