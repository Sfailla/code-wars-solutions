var countBits = function(n) {
	const decimalToBinary = number => {
		return number.toString(2);
	};

	const total = [ ...`${decimalToBinary(n)}` ].reduce((acc, cur, i) => {
		if (cur.includes(1)) {
			acc++;
		}
		return acc;
	}, 0);

	return total;
};

// 2 REALLY CLEVER ANSWERS

var countBits = function(n) {
	return n.toString(2).split('0').join('').length;
};

var countBits = function(n) {
	return [ ...n.toString(2) ].reduce((a, b) => a + Number(b), 0);
};

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
console.log(countBits(1234), 5);
console.log(countBits(10), 2);
console.log(countBits(15), 4);
