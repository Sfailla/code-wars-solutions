function rot13(message) {
	// create function to get ASCII code from letters
	const getCodesFromLetters = () => {
		// placeholder for ACII code
		const codeArray = [];
		// loop over letters
		for (let i = 0; i < message.length; i++) {
			// get the code for each letter;
			const code = message.charCodeAt(i);
			// push ASCII code to codeArray
			codeArray.push(code);
		}
		// return the new array values
		return codeArray;
	};

	// set a var for the result from getCodesFromLetters function
	// so we can plug it in the next function
	const codes = getCodesFromLetters(message);
	// create a function that takes the numbers array and
	// makes necessary calculations
	const updateCodeLetters = () => {
		const newCodes = [];
		// iterate over the codes
		for (let i = 0; i < codes.length; i++) {
			// set variable to keep track of iteration values
			const code = codes[i];
			// set variable for calculation to codes
			const updateCode = code + 13;
			// set guidelines for all the edge cases
			// if code is not in the range allowed for calculation
			if (code < 65 || (code > 90 && code < 97)) {
				// push the character into code array
				newCodes.push(code);
				// if the char is in the range but after calc its over the position z
			} else if (code > 96 && code < 123 && updateCode > 122) {
				// subtract the overflow from 122
				const sum = updateCode - 122;
				// add overflow to beginning of alphabet
				const newCode = 96 + sum;
				// push the value
				newCodes.push(newCode);
				// if the char is capital and is in range and over z value
			} else if (code > 64 && code < 91 && updateCode > 91) {
				// subtract the overflow from 91
				const sum = updateCode - 91;
				// add overflow to beginning of letter set
				const newCode = 65 + sum;
				// push the value
				newCodes.push(newCode);
			} else {
				// push any other value that doesnt need calculations
				newCodes.push(updateCode);
			}
		}
		// return the array with updated letters
		return newCodes;
	};
	// set variable for new array values
	const newMessage = updateCodeLetters(codes);

	// create function that takes the new number values and transforms
	// back into letters
	const changeAsciiToLetters = array => {
		// placeholder to store result
		const result = [];
		// loop over new ASCII vals
		for (let i = 0; i < array.length; i++) {
			// placeholder to keep track of ASCII vals
			const element = array[i];
			// change ASCII vals back to letters
			const letters = String.fromCharCode(element);
			// push letters to placeholder array
			result.push(letters);
		}
		// return placeholder array
		return result;
	};

	// set var for results of new letters array
	const result = changeAsciiToLetters(newMessage);
	// join the answer back to a string
	const answer = result.join('');
	// finally return answer
	return answer;
}

const result = 'test';
const result2 = 'Test';
console.log(
	'grfg' == rot13(result),
	`Input: test , Expected Output: grfg , Actual Output: ${rot13(
		result
	)}`
);
console.log(
	'Grfg' == rot13(result2),
	`Input: test , Expected Output: Grfg , Actual Output: ${rot13(
		result2
	)}`
);
