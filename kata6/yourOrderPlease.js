function order(words) {
	// do something
	if (!words) return '';
	// split words by word
	const splitWords = words.split(' ');
	// placeholder to store new sorted array
	const sortedWords = [];
	// loop over words
	for (let i = 0; i < splitWords.length; i++) {
		// assign variable for each word
		const word = splitWords[i];
		// match 1st digit
		const digit = +word.match(/\d/)[0];
		// save to array at correct position
		sortedWords[digit - 1] = word;
	}
	// return and join new array
	return sortedWords.join(' ');
}

console.log(order(''));
