/* 
  VOWELS BACK:
  -move consonants forward 9 spaces; (if u hit z start at a again)
  -move vowels back 5 spaces; (if u hit a start at z)
  -if character is [c, o] move back 1 space;
  -if character is [d] move back 3 spaces;
  -if character is [e] move back 4 spaces;
*/

function vowelBack(s) {
	// assign placeholder variables to store values we need
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const splitLetters = [ ...alphabet ];
	const splitString = [ ...s ];
	const vowels = 'aiu';
	let array = [];
	let result;
	// store alphabet and ascii values as key val pairs in obj
	let placeholder = splitLetters.reduce((acc, val, i) => {
		acc[val] = alphabet.charCodeAt(i);
		return acc;
	}, {});
	// implement helper function that compares the ascii range to the legend and
	// shift letter values accordingly
	let checkLetterRange = function letterRange(total, object) {
		if (total >= 97 && total <= 122) {
			result = Object.keys(object).find(keys => {
				return object[keys] === total;
			});
			return result;
		} else if (total < 97) {
			const sum = 97 - total;
			const newTotal = 123 - sum;
			result = Object.keys(object).find(keys => {
				return object[keys] === newTotal;
			});
			return result;
		} else if (total > 122) {
			const sum = total - 122;
			const newTotal = 96 + sum;
			result = Object.keys(object).find(keys => {
				return object[keys] === newTotal;
			});
			return result;
		}
	};
	// implement another helper function to keep code DRY.
	const checkAgainstLegend = function computeData(
		total,
		object,
		originalLet,
		specialLet,
		arr
	) {
		const result = checkLetterRange(total, object);
		const results = specialLet.includes(result)
			? originalLet
			: result;
		arr.push(results);
	};
	// final evaluation where we map the previous letter value to the new values depending on legend
	splitString.map(letter => {
		for (const [ key, val ] of Object.entries(placeholder)) {
			if (letter === key) {
				const specialLetters = [ ...'code' ];
				const originalLetter = letter;

				if ([ ...vowels ].indexOf(letter) > -1) {
					const total = val - 5;
					checkAgainstLegend(
						total,
						placeholder,
						originalLetter,
						specialLetters,
						array
					);
				} else if (letter === 'c' || letter === 'o') {
					const total = val - 1;
					checkAgainstLegend(
						total,
						placeholder,
						originalLetter,
						specialLetters,
						array
					);
				} else if (letter === 'd') {
					const total = val - 3;
					checkAgainstLegend(
						total,
						placeholder,
						originalLetter,
						specialLetters,
						array
					);
				} else if (letter === 'e') {
					const total = val - 4;
					checkAgainstLegend(
						total,
						placeholder,
						originalLetter,
						specialLetters,
						array
					);
				} else {
					const total = val + 9;
					checkAgainstLegend(
						total,
						placeholder,
						originalLetter,
						specialLetters,
						array
					);
				}
			}
		}
	});
	// join and return the answer
	const answer = array.join('');
	return answer;
}

console.log(vowelBack('testcase')); // "tabtbvba"
