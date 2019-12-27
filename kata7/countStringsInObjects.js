function strCount(obj) {
	// Your code here
	if (typeof obj == 'string') return 1;

	var count = 0;
	// gotta figure out why this works.
	for (var prop in obj) {
		if (typeof obj[prop] == 'string') count++;
		else if (typeof obj[prop] == 'object')
			count += strCount(obj[prop]);
	}

	return count;
}

console.log(
	strCount([
		[ 1, '1', 2, 3, 4, '0', { one: 'a', two: 's', three: 'c' } ],
		'strin',
		'strin',
		'strin'
	]),
	8,
	'Did not count the correct number of strings. Check counting inside nested objects.'
);

console.log(
	strCount({
		first: '1',
		second: '2',
		third: false,
		fourth: [ 'anytime', 2, 3, 4 ],
		fifth: null,
		sixth: undefined,
		seventh: {}
	}),
	3,
	'Did not count the correct number of strings. Check counting inside nested objects.'
);
