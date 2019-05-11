function sum(number) {
	'use strict';

	let answer = 0;

	for (let i = 0; i < number.length; i++) {
		if (typeof number[i] !== 'number') {
			return answer;
		} else {
			answer = answer += number[i];
		}
	}
	return answer;
}

sum([]);
sum([ 1, 5.2, 4, 0, -1 ]);
