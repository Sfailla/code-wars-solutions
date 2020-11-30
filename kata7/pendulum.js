function pendulum(values) {
	const array = [];
	const sorted = [ ...values ].sort((a, b) => a - b);

	sorted.forEach((num, index) => {
		index === 0
			? array.push(num)
			: index % 2 !== 0 ? array.push(num) : array.unshift(num);
	});

	return array;
}

console.log(pendulum([ 8, 7, 10, 3 ]), [ 8, 3, 7, 10 ]);
console.log(pendulum([ 6, 6, 8, 5, 10 ]), [ 10, 6, 5, 6, 8 ]);
console.log(pendulum([ 9, 4, 6, 4, 10, 5 ]), [ 9, 5, 4, 4, 6, 10 ]);
console.log(pendulum([ 4, 6, 8, 7, 5 ]), [ 8, 6, 4, 5, 7 ]);
