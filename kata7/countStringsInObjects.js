function strCount(obj) {
	// Your code here

	const stringVals = [];
	const extractedVals = [];

	let array = Object.values(obj);

	extractedVals.push(array);

	extractedVals.map(item => {
		if (typeof item === 'object') {
			item;
		}
	});

	const flatten = ary =>
		ary.reduce(
			(a, b) => a.concat(Array.isArray(b) ? flatten(b) : b),
			[]
		);

	const flat = flatten(extractedVals);

	flat;

	// const mapped = flat.map((item, i) => {
	// 	if (item && typeof item === 'object') {
	// 		let vals = Object.values(item);

	// 		stringVals.push(vals);
	// 	} else if (typeof item === 'string') {
	// 		stringVals.push(item);
	// 		return item;
	// 	}
	// });

	const stringCount = stringVals.length;
	return stringCount;
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
