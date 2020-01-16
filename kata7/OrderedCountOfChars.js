var orderedCount = function(text) {
	// Implement me!

	// text = text.split('');

	// let reduce = text.reduce((obj, letters) => {
	// 	obj[letters] = obj[letters] || 0;
	// 	obj[letters]++;
	// 	return obj;
	// }, {});

	// return Object.entries(reduce);

	text = text.split('');
	let map = {};

	for (let i = 0; i < text.length; i++) {
		let el = text[i];

		map[el] = map[el] || 0;
		map[el]++;
	}

	// if (typeof Object.keys(map) === 'number') {
	// 	console.log('yes');
	// } else {
	// 	console.log('no');
	// }
	map;

	return map;
};

const examples = [
	// [
	// 	'abracadabra',
	// 	[ [ 'a', 5 ], [ 'b', 2 ], [ 'r', 2 ], [ 'c', 1 ], [ 'd', 1 ] ]
	// ],
	// [
	// 	'Code Wars',
	// 	[
	// 		[ 'C', 1 ],
	// 		[ 'o', 1 ],
	// 		[ 'd', 1 ],
	// 		[ 'e', 1 ],
	// 		[ ' ', 1 ],
	// 		[ 'W', 1 ],
	// 		[ 'a', 1 ],
	// 		[ 'r', 1 ],
	// 		[ 's', 1 ]
	// 	]
	// ],
	[ '212', [ [ '2', 2 ], [ '1', 1 ] ] ]
];

const it = (string, cb) => {
	return {
		text: () => string,
		func: (...args) => cb(...args)
	};
};

for (const [ text, expected ] of examples) {
	it(`text: ${text} `, () => {
		// something
	});
	console.log(orderedCount(text), expected);
}
