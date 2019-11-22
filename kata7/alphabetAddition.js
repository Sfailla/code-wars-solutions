function addLetters(...letters) {
	// set a string of letters for alphabet
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	// split string of letters to an array of letters
	const lettrs = [ ...alphabet ];
	let array = [];
	let result = '';
	let i = 1;
	// if argument has only 1 letter we return that letter
	if (letters.length === 1) {
		return letters.join('');
	}
	// if argument is empty we return z
	if (!letters.length) {
		return 'z';
	}
	// im making an object that holds the alphabet as a key
	// and the number as its value
	let keys = lettrs.reduce((acc, val) => {
		acc[val] = i++;
		return acc;
	}, {});
	// map over the args array and return the number value for each letter
	letters.map(letter => {
		let args = keys[letter];
		array.push(args);
	});
	// we take the array of numbers and reduce it to get the sum
	let sum = array.reduce((acc, val) => {
		if (acc > 26) {
			acc = acc - 26;
		}
		return acc + val;
	}, 0);
	console.log(sum);
	// if sum is greater than 26 (end of the alphabet) we start over at 1
	if (sum > 26) {
		sum = sum - 26;
	}
	// here I get the key and value of the key according to the sum
	for (const [ key, val ] of Object.entries(keys)) {
		if (sum === val) {
			result += key;
		}
	}
	// return the letter that corresponds with the sum
	return result;
}

console.log(addLetters('q', 'o', 't', 'x', 'e'));
