function dative(word) {
	const targetLettersNak = [ 'a', 'á', 'o', 'ó', 'u', 'ú' ];
	let targetLetters = '';

	for (let i = 0; i < word.length; ++i) {
		let letter = word[i];

		if (letter.match(/[AEIOUáéíóúöüőű]/gi)) {
			targetLetters += letter;
		}
	}

	targetLetters;

	const lastLetter = targetLetters[targetLetters.length - 1];
	const addSuffix = targetLettersNak.includes(lastLetter)
		? word + 'nak'
		: word + 'nek';
	return addSuffix;
}

var tests = [
	// [input, expected]
	[ 'ablak', 'ablaknak' ],
	[ 'tükör', 'tükörnek' ],
	[ 'keret', 'keretnek' ],
	[ 'otthon', 'otthonnak' ],
	[ 'virág', 'virágnak' ],
	[ 'tett', 'tettnek' ],
	[ 'rokkant', 'rokkantnak' ],
	[ 'rossz', 'rossznak' ],
	[ 'gonosz', 'gonosznak' ]
];

console.log(dative('mór'));

// for (var i = 0, l = tests.length; i < l; i++) {
// 	var input = tests[i][0];
// 	var expected = tests[i][1];
// 	console.log(input + ' -> ' + expected);
// 	console.log(dative(input), expected);
// }
