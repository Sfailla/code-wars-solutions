function getMiddle(s) {
	//Code goes here!
	// split string into array of letters;
	let element = [ ...s ];
	let sliced, len;

	len = element.length;

	len % 2 === 0
		? (sliced = element.slice(len / 2 - 1, len / 2 + 1))
		: (sliced = element.slice(
				Math.round(len / 2 - 1),
				Math.round(len / 2)
			));

	let answer = sliced.join('');

	return answer;
}

console.log(getMiddle('testing')); // es
