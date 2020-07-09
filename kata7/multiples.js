function multiples(m, n) {
	const array = [];

	for (let i = 1; i <= m; i++) {
		array.push(i * n);
	}

	return array;
}

console.log(multiples(3, 5), [ 5, 10, 15 ]);
