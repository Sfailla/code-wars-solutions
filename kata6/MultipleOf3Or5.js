function solution(number) {
	let multOf3 = [];
	let multOf5 = [];

	for (let i = 1; i <= number; i++) {
		console.log(i);
		if (i % 3 === 0) {
			multOf3.push(i);
		} else if (i % 5 === 0) {
			multOf5.push(i);
		}
	}

	console.log(multOf3);
	console.log(multOf5);
	return number;
}

console.log(solution(20)); // 23
