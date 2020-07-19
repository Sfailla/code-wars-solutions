function modifiedSum(a, n) {
	// solve
	const mapped = a.map(num => {
		const squared = Math.pow(num, n);
		return squared;
	});

	const originalArrTotal = a.reduce((a, b) => a + b);
	const squaredTotal = mapped.reduce((a, b) => a + b);
	const total = squaredTotal - originalArrTotal;

	return total;
}

console.log(modifiedSum([ 1, 2, 3 ], 3), 30);
console.log(modifiedSum([ 1, 2 ], 5), 30);
console.log(modifiedSum([ 1, 2, 3 ], 3), 30);
