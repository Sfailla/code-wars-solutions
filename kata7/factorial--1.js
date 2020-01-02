function factorial(n) {
	if (n > 20 || n < 0) {
		return 'RangeError';
	} else {
		let answer = 1;

		for (let i = n; i >= 1; i--) {
			answer *= i;
		}

		return answer;
	}
}

console.log(factorial(12));
