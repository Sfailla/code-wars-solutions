/*
Your task is to write function findSum.
Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)
findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

const findSum = n => {
	let answer = [];

	for (let i = 0; i <= n; i++) {
		if (i % 3 === 0) {
			answer.push(i);
		} else if (i % 5 === 0) {
			answer.push(i);
		}
	}

	return eval(answer.join('+'));
};

findSum(5);
console.log(findSum(10));
