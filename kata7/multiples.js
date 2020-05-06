function multiples(m, n) {
	console.log('m => ', m);
	console.log('n => ', n);

	const array = [];
	const total = n * m;
	total;
	// if (total < 0) {

	// } else {

	for (let i = n; i <= total; i += n) {
		i;
		array.push(i);
	}

	return array;
}
// }

console.log(multiples(-1, 5), [ 5, 10, 15 ]);
