function getFreeUrinals(urinals) {
	// very difficult for now ill come back;

	urinals = '0' + urinals + '0';
	let counter = 0;

	for (let i = 0; i < urinals.length; i++) {
		if (
			urinals[i] == 0 &&
			urinals[i - 1] == 0 &&
			urinals[i + 1] == 0
		) {
			counter++;
			i++;
		}
	}
	return counter;
}

console.log(getFreeUrinals('10001'), 1);
console.log(getFreeUrinals('1001'), 0);
console.log(getFreeUrinals('00000'), 3);
console.log(getFreeUrinals('0000'), 2);
console.log(getFreeUrinals('01000'), 1);
console.log(getFreeUrinals('00010'), 1);
console.log(getFreeUrinals('10000'), 2);
console.log(getFreeUrinals('101100001'), -1);
console.log(getFreeUrinals('1'), 0);
console.log(getFreeUrinals('0'), 1);
console.log(getFreeUrinals('10'), 0);
