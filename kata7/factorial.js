const factorial = n => {
	let answer = 1;

	for (let i = n; i >= 1; i--) {
		answer *= i;
	}

	return answer;
};
console.log(factorial(12));
// factorial(12); // 120;
