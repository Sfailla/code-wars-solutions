/*
uppercase every even indexed letter. If there is more than one word, the new words Index starts at zero

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

creative answer
*/
function toWeirdCase(string) {
	return string
		.split(' ')
		.map(function(word) {
			return word
				.split('')
				.map(function(letter, index) {
					return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
				})
				.join('');
		})
		.join(' ');
}

function toWeirdCase(string) {
	// TODO

	let words = [];
	let array = [];

	string = string.split(' ');
	string.map((word, index) => {
		let split = word.split('');
		words.push(split);
	});

	for (let i = 0; i < words.length; i++) {
		words[i].map((letter, index) => {
			if (index === 0) {
				array.push(' ');
			}
			index % 2 === 0 ? array.push(letter.toUpperCase()) : array.push(letter);
		});
	}
	let answer = array.slice(1).join('');
	return answer;
}

toWeirdCase('Weird string case');
