function rowSumOddNumbers(n) {
	// code
	let oddNumbers = [];
	let oddNums = num => num % 2 !== 0;

	for (let i = 0; i <= 100; i++) {
		if (oddNums(i)) {
			oddNumbers.push(i);
		}
	}

	function formatItems(oddN) {
		const arr = [];
		let count = 1;
		for (let i = 0; i < oddN.length; i++) {}
	}
	formatItems(oddNumbers);

	let object = oddNumbers.reduce((obj, items, index) => {
		obj[index + 1] = oddNumbers[index];
		return obj;
	}, {});

	object;

	return n;
}

function generatePyramid(n) {
	return [ ...Array(n) ].forEach((_, i) =>
		console.log([ ...Array(++i) ].map((_, j) => ++j).join(' '))
	);
}

generatePyramid(5);

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(3), 27);
console.log(rowSumOddNumbers(42), 74088);
