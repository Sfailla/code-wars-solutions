function pigIt(str) {
	const wordArray = str.split(' ');

	const pigLatin = wordArray
		.map(word => {
			if (word.match(/[\W]/g)) {
				return word;
			} else if (word.length <= 2) {
				const newWord = word.split('').reverse().join('');
				return `${newWord}ay`;
			} else if (word.length > 2) {
				const firstLetter = word[0];
				const newWord = word.slice(1);
				return `${newWord}${firstLetter}ay`;
			}
		})
		.join(' ');

	return pigLatin;
}

// CREATIVE SOLUTION

function pigIt(str) {
	return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay');
console.log(pigIt('Hello world !'), 'elloHay orldway !');
