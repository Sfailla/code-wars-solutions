function solve(n) {
	let count = 0;
	let diff = n;
	const money = [ 500, 200, 100, 50, 20, 10 ];

	function computeATM(amount) {
		let largestInt = 0;
		money.map(key => {
			if (key <= amount && key > largestInt) {
				largestInt = key;
			}
		});

		return {
			largestInt,
			amount
		};
	}

	while (diff > 0) {
		count++;
		const { largestInt, amount } = computeATM(diff);
		diff = amount - largestInt;

		if (diff > 0 && diff < 10) {
			diff = '-1';
			break;
		}
	}

	return diff === 0 ? count : -1;
}

console.log(solve(770), 4, 'Wrong result for 770');
console.log(solve(550), 2, 'Wrong result for 550');
console.log(solve(10), 1, 'Wrong result for 10');
console.log(solve(1250), 4, 'Wrong result for 1250');
console.log(solve(5000), 10, 'Wrong result for 5000');
