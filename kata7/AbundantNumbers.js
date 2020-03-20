function abundantNumber(num) {
	function getDivisableNums(number) {
		let numToTotal = [];
		for (let i = 1; i <= number; i++) {
			if (number % i === 0 && i !== number) {
				numToTotal.push(i);
			}
		}
		return numToTotal;
	}

	const totalNum = getDivisableNums(num).reduce(
		(acc, cur) => acc + cur,
		0
	);

	return totalNum > num ? true : false;
}

console.log(abundantNumber(12), true);
console.log(abundantNumber(37), false);
console.log(abundantNumber(120), true);
console.log(abundantNumber(77), false);
