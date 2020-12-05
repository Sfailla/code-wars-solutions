function strong(n) {
	const changeNumToString = String(n).split('');
	const factorial = num => {
		let result = 1;
		for (let i = num; i > 0; i--) {
			result *= i;
		}
		return result;
	};

	const getTotal = changeNumToString.reduce((acc, num, i) => {
		return acc + factorial(Number(num));
	}, 0);

	const result = getTotal === n ? 'STRONG!!!!' : 'Not Strong !!';
	return result;
}

// factorial with recursion can be done nicely in one line;
const factorial = n => (n ? n * factorial(n - 1) : 1);
factorial(5); // 120

// very concise!!
function strong(n) {
	const factorial = n => (n ? n * factorial(n - 1) : 1);
	return [ ...String(n) ].reduce((acc, num) => acc + factorial(num), 0) === n
		? 'STRONG!!!!'
		: 'Not Strong !!';
}

console.log(strong(1), 'STRONG!!!!');
console.log(strong(2), 'STRONG!!!!');
console.log(strong(145), 'STRONG!!!!');
console.log(strong(7), 'Not Strong !!');
console.log(strong(93), 'Not Strong !!');
console.log(strong(185), 'Not Strong !!');
