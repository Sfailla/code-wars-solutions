function solution(number) {
	// multiples of 3 and 5

	const add = (a, b) => a + b;

	let result = 0;

	for (let i = 0; i < number; i++) {
		const multipleOf3 = i % 3 === 0;
		const multipleOf5 = i % 5 === 0;

		if (multipleOf3 || multipleOf5) {
			result = add(result, i);
		}
	}

	return result;
}

// function solution(number) {
// 	let answer;
// 	for (let i = 1, arr = []; i < number; i++) {
// 		i % 3 === 0 || i % 5 === 0 ? arr.push(i) : i;
// 		i === number - 1 ? (answer = arr.reduce((acc, curr) => acc + curr, 0)) : 0;
// 	}
// 	return answer;
// }

console.log(solution(10), 23);
console.log(solution(20), 78);
console.log(solution(100), 2318);
console.log(solution(200), 9168);
console.log(solution(1000), 233168);
console.log(solution(10000), 23331668);
console.log(solution(1000000), 233333166668);
// console.log(solution(200000000), 9333333166666668);
