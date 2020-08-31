function getFreeUrinals(urinals) {
	// very difficult for now ill come back;
	let i = 0;
	let seq = 0;
	let count = 0;
	let results = [];

	while (i < urinals.length) {
		let current = urinals[i];
		let last = urinals[urinals.length - 1];
		let next = urinals[i + 1];
		let first = urinals[0];

		if (next == 0 && i != current) {
			results[seq] = next;
			seq++;
		}

		if ((first == 0 && i == first) || (last == 0 && i == last)) {
			count++;
		}

		count;
		results;
		debugger;
		i++;
	}
	count;
	results;

	return urinals;
}

// console.log(getFreeUrinals('10001'), 1);
// console.log(getFreeUrinals('1001'), 0);
console.log(getFreeUrinals('00000'), 3);
// console.log(getFreeUrinals('0000'), 2);
// console.log(getFreeUrinals('01000'), 1);
// console.log(getFreeUrinals('00010'), 1);
// console.log(getFreeUrinals('10000'), 2);
// console.log(getFreeUrinals('101100001'), -1);
// console.log(getFreeUrinals('1'), 0);
// console.log(getFreeUrinals('0'), 1);
// console.log(getFreeUrinals('10'), 0);
