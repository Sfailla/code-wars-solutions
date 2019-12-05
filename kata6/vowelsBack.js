/* 
  VOWELS BACK:
  -move consonants forward 9 spaces; (if u hit z start at a again)
  -move vowels back 5 spaces; (if u hit a start at z)
  -if character is [c, o] move back 1 space;
  -if character is [d] move back 3 spaces;
  -if character is [e] move back 4 spaces;
*/

function vowelBack(s) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const splitLetters = [ ...alphabet ];
	const splitString = [ ...s ];
	const vowels = 'aiu';
	let result;
	let array = [];

	let placeholder = splitLetters.reduce((acc, val, i) => {
		acc[val] = alphabet.charCodeAt(i);
		return acc;
	}, {});

	let checkLetterRange = function letterRange(total, object) {
		const specialLetters = [ ...'code' ];
		const originalTotal = total;
		if (total > 97 && total < 122) {
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
			let results = specialLetters.includes(result)
				? originalTotal
				: result;
			console.log(results);
			return results;
		}
	};

	splitString.map(letter => {
		for (const [ key, val ] of Object.entries(placeholder)) {
			if (letter === key) {
				if ([ ...vowels ].indexOf(letter) > -1) {
					const total = val - 5;
					array.push(checkLetterRange(total, placeholder));
				} else if (letter === 'c' || letter === 'o') {
					// move back 1 space
					const total = val - 1;
					array.push(checkLetterRange(total, placeholder));
				} else if (letter === 'd') {
					const total = val - 3;
					array.push(checkLetterRange(total, placeholder));
					// move back 3 space
				} else if (letter === 'e') {
					const total = val - 4;
					array.push(checkLetterRange(total, placeholder));
					// move back 4 space
				} else {
					// move forward 9
					const total = val + 9;
					array.push(checkLetterRange(total, placeholder));
				}
			}
		}
	});

	console.log(array);
	return s;
}

console.log(vowelBack('testcase')); // "tabtbvba"
