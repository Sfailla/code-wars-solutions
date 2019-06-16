function toWeirdCase(string) {
	// TODO
	let count = 0;
	count -= 1;
	string = string.split('');
	string.map((word, index) => {
		if (word === ' ') {
			count = 0;
		} else {
			count++;
		}
		console.log();
		// for (let i = 0; i < word.length; i++) {
		// 	console.log(word[i]);
		// }
		// if (count % 2 === 0) {
		// }
	});
}

toWeirdCase('Weird string case');
