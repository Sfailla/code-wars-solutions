function duplicateCount(text) {
	// set placeholder for duplicates
	const duplicatesArray = [];
	// transform text to all lowercase
	const lowercaseText = text.toLowerCase();
	// split string by each letter
	const textArray = [ ...lowercaseText ];
	// loop over string
	const duplicateMap = textArray.reduce((values, value) => {
		// keep track of letters that repeat themselves
		values[value] = values[value] || 0;
		values[value]++;
		return values;
	}, {});

	// iterate over our duplicateMap obj
	for (const [ key, val ] of Object.entries(duplicateMap)) {
		// if the letter has a val of more than 1
		if (val > 1) {
			// push those letters into duplicatesArray
			duplicatesArray.push(key);
		}
	}

	// set var for keeping track of the length of the array
	const duplicateCount = duplicatesArray.length;
	// return the number of each duplicate letter in array
	return duplicateCount;
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(
	duplicateCount('Indivisibilities'),
	2,
	'characters may not be adjacent'
);
