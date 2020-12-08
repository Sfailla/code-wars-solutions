function solution(number) {
	const range = number => ({
		numberRange: Array(number - 1).fill().map((_, idx) => idx + 1)
	});

	const getMultiples = array => ({
		multiples: array.filter(num => num % 5 === 0 || num % 3 === 0)
	});

	const getTotal = array => ({ total: array.reduce((acc, cur) => acc + cur, 0) });

	const { numberRange } = range(number);
	const { multiples } = getMultiples(numberRange);
	const { total } = getTotal(multiples);

	return total;
}

function solution(number) {
	return number < 0
		? 0
		: Array(number - 1)
				.fill()
				.map((_, i) => i + 1)
				.filter(num => num % 5 === 0 || num % 3 === 0)
				.reduce((acc, cur) => acc + cur, 0);
}

// SMART SOLUTION

function solution(number) {
	let sum = 0;

	for (let i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(solution(10)); // 3, 5, 6 and 9 added = 23;
