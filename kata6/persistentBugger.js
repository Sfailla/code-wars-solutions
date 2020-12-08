function persistence(num) {
	const getArray = num => String(num).split('');
	let total = 0;

	const getTotal = num => {
		num = getArray(num);

		if (num.length > 1) {
			let sum = 1;
			for (let i = 0; i < num.length; i++) {
				sum *= num[i];
			}

			total++;
			num = sum;
			getTotal(num);
		}

		return total;
	};

	return getTotal(num);
}

// BETTER RECURSIVE SOLUTION

function persistence(num) {
	return num > 9
		? persistence([ ...`${num}` ].reduce((acc, cur) => acc * cur)) + 1
		: 0;
}

// NON RECURSIVE SOLUTION

function persistence(num) {
	let amount = 0;

	while (num > 9) {
		num = [ ...`${num}` ].reduce((acc, cur) => acc * cur);
		amount++;
	}

	return amount;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
