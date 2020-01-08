function explode(x) {
	const array = [];
	const letters = [];
	let repeatAmount = 0;
	let answer = [];

	let mapped = x.map(val => {
		if (typeof val === 'number') {
			array.push(val);
		} else {
			letters.push(val);
		}

		return {
			array,
			letters
		};
	});

	if (array.length === 2) {
		let total = array.reduce((acc, arr) => acc + arr, 0);
		repeatAmount = total;
	}

	if (letters.length === 2) {
		return 'Void!';
	}

	if (array.length === 1) {
		repeatAmount = array.join('');
	}

	while (0 < repeatAmount) {
		answer.push(x);
		repeatAmount--;
	}

	return answer;
}

console.log(explode([ 9, 3 ]), [
	[ 9, 3 ],
	[ 9, 3 ],
	[ 9, 3 ],
	[ 9, 3 ],
	[ 9, 3 ],
	[ 9, 3 ],
	[ 9, 3 ],
	[ 9, 3 ],
	[ 9, 3 ],
	[ 9, 3 ],
	[ 9, 3 ],
	[ 9, 3 ]
]);
console.log(explode([ 'a', 3 ]), [
	[ 'a', 3 ],
	[ 'a', 3 ],
	[ 'a', 3 ]
]);
console.log(explode([ 6, 'c' ]), [
	[ 6, 'c' ],
	[ 6, 'c' ],
	[ 6, 'c' ],
	[ 6, 'c' ],
	[ 6, 'c' ],
	[ 6, 'c' ]
]);
console.log(explode([ 'a', 'b' ]), 'Void!');
