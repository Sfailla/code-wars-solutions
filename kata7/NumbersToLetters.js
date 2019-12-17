function switcher(x) {
	// make a string of alphabet letters and special chars
	const alphabet = `?!abcdefghijklmnopqrstuvwxyz`;
	// set the count to 28 so we can count down and assign to obj
	let count = 28;
	// set empty string to hold our answer
	let result = '';
	// split and reduce the alphabet string so there is a map of
	// letters and there values
	const reduced = [ ...alphabet ].reduce((acc, val, i) => {
		// set a blank space as a value worth 29
		acc[' '] = 29;
		// set alphabet letters to equal the count minus 1
		acc[val] = count--;
		// return the object with letter and value mapping
		return acc;
	}, {});
	// format the string of numbers to be intergers
	const formatArray = x.map(num => parseInt(num));
	// map over numbers given
	formatArray.map((num, i) => {
		// loop over map object
		for (const key in reduced) {
			// if the numbers given match the number value
			if (num === reduced[key]) {
				// add the letter value for each num to the placeholder string
				result += key;
			}
		}
	});
	// return placeholder string as answer
	return result;
}

console.log(
	switcher([ '24', '12', '23', '22', '4', '26', '9', '8' ]),
	'codewars'
);
console.log(switcher([ '4', '24' ]), 'wc');
console.log(
	switcher([
		'25',
		'7',
		'8',
		'4',
		'14',
		'23',
		'8',
		'25',
		'23',
		'29',
		'16',
		'16',
		'4'
	]),
	'btswmdsbd kkw'
);

/*
CODE WARS SOLUTION
function switcher(x) {
  return x.map(val => ' zyxwvutsrqponmlkjihgfedcba!? '[val]).join``;
}
*/
