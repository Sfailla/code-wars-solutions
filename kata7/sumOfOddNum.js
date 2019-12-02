function rowSumOddNumbers(n) {
	// TODO
	let num = 10000;
	let oddNum = [];
	let arr = [];

	for (let i = 0; i <= num; i++) {
		if (i % 2 !== 0) {
			oddNum.push(i);
		}
	}

	oddNum.map((val, idx) => {
		arr.push(oddNum.splice(0, idx + 1));
		return arr;
	});

	let reduced = arr.reduce((acc, val, i) => {
		let idx = i + 1;
		acc[idx] = val;
		return acc;
	}, {});

	let realObj = Object.assign({}, reduced);
	if (typeof n === 'number') {
		let result = realObj[n];

		let answer = result.reduce((acc, val) => {
			return acc + val;
		}, 0);

		return answer;
	} else {
		return 'not a number';
	}
}

console.log(rowSumOddNumbers(5)); //
