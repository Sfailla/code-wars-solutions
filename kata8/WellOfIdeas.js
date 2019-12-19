function well(x) {
	// set variables to hold good and bad values
	let good = 0,
		bad = 0;
	// loop over all array Items
	for (let i = 0; i < x.length; i++) {
		// set var for elements in array
		let el = x[i];
		// looking for elements that contains good;
		if (el == 'good') {
			// we will increment good count + 1
			good++;
			// looking for elements that contains bad;
		} else if (el === 'bad') {
			// we will increment bad count + 1
			bad++;
		}
	}
	// set checks for edge cases
	// if good appears 1 or 2 times
	if (good >= 1 && good <= 2) {
		// return Publish
		return 'Publish!';
		// if good appears more that 2
	} else if (good > 2) {
		// return 'I smell a series!';
		return 'I smell a series!';
	} else if (good === 0) {
		// else return fail
		return 'Fail!';
	}
}

console.log(well([ 'bad', 'bad', 'bad' ]), 'Fail!');
console.log(well([ 'good', 'bad', 'bad', 'bad', 'bad' ]), 'Publish!');
console.log(
	well([
		'good',
		'bad',
		'bad',
		'bad',
		'bad',
		'good',
		'bad',
		'bad',
		'good'
	]),
	'I smell a series!'
);
