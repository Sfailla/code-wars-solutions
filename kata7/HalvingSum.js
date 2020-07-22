function halvingSum(n) {
	let array = [];
	let valueToDivide = 1;
	let marker = n;

	const addToArray = num => {
		let half = Math.floor(num / valueToDivide);
		array.push(half);
		let double = valueToDivide * 2;
		double < num ? (valueToDivide = double) : valueToDivide;

		return {
			half
		};
	};

	while (marker > 1) {
		let { half } = addToArray(n);
		marker = half;
	}

	array;

	let total = array.reduce((a, b) => a + b);
	total;
	return total;
}

console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);
