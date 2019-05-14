/*
FIZZ BUZZ CHALLENGE 

write a function that prints numbers 1 - 100.
for multiples of 3 print fizz.
for multiples of 5 print buzz.
*/

function fizzbuzz() {
	// write here

	let answer;

	for (let i = 0; i <= 100; i++) {
		answer = '';
		if (i % 3 === 0) {
			answer += 'fizz';
		} else if (i % 5 === 0) {
			answer += 'buzz';
		} else {
			answer += i;
		}
	}
}

fizzbuzz();
console.log(fizzbuzz());

let answer = Array.from(
	{ length: 100 },
	(n, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i
).join(' ');

console.log(answer);
