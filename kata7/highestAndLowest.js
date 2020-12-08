function highAndLow(numbers) {
	const values = [
		Math.max(...numbers.split(' ').map(Number)),
		Math.min(...numbers.split(' ').map(Number))
	];

	const [ highest, lowest ] = values;

	return `${highest} ${lowest}`;
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'), '542 -214');
