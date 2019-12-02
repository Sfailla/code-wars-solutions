function getMiddle(s) {
	//Code goes here!
	// split string into array of letters;
	let element = [ ...s ];
	// set vars to store needed values
	let sliced, len;
	// setting a var for element.length since its used a few times
	len = element.length;
	// if the length of the string is even we return 2 letters
	// otherwise the string length is odd and we return the middle letter
	len % 2 === 0
		? (sliced = element.slice(len / 2 - 1, len / 2 + 1))
		: (sliced = element.slice(
				Math.round(len / 2 - 1),
				Math.round(len / 2)
			));
	// join the array values back to a string
	let answer = sliced.join('');
	// return the answer
	return answer;
}

console.log(getMiddle('testing')); // es
