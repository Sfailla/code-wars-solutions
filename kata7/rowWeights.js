function rowWeights(array) {
	let evenArr = [];
	let oddArr = [];

	array.map((items, idx) => {
		let even = idx % 2 === 0;
		let odd = idx % 2 === 1;

		if (even) evenArr.push(items);
		if (odd) oddArr.push(items);
	});

	if (evenArr.length === 1) {
		evenArr = [ evenArr[0], 0 ];
	}
	if (oddArr.length === 1) {
		oddArr = [ 0, oddArr[0] ];
	}

	console.log(oddArr);

	let evenTotal = evenArr.reduce((acc, idx) => {
		acc + idx;
	}, 0);

	let oddTotal = oddArr.reduce((acc, idx) => {
		acc + idx;
	}, 0);

	console.log(evenTotal);
	// console.log([ evenTotal, oddTotal ]);
	// return [ evenTotal, oddTotal ];
}

// rowWeights([ 29, 83, 67, 53, 19, 28, 96 ]);

rowWeights([ 0, 1, 0 ]);
