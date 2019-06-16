function spinWords() {
	let s = arguments[0];
	// REFACTORED
	return s
		.split(' ')
		.map(word => {
			return word.length >= 5 ? word.split('').reverse().join('') : word;
		})
		.join(' ');

	// ORIGINAL ANSWER
	// s.map(word => {
	// 	if (word.length >= 5) {
	// 		const reverse = word.split('').reverse().join('');
	// 		answer.push(reverse);
	// 	} else {
	// 		answer.push(word);
	// 	}
	// });

	// return answer.join(' ');
}

spinWords('Just kidding there is still one more');
console.log(spinWords('Just kidding there is still one more'));
