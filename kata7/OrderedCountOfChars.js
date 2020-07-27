let orderedCount = function(text) {
	// Implement me!
	let count = 0;
	let textArray = text.split('');
	let mapped = {};
	textArray.map((val, idx) => {
		if (textArray.indexOf(val) === idx) {
		}

		val;
	});

	mapped;
};

const examples = [
	// [
	// 	'abracadabra',
	// 	[ [ 'a', 5 ], [ 'b', 2 ], [ 'r', 2 ], [ 'c', 1 ], [ 'd', 1 ] ]
	// ],  nnn
	// [gsfsfhgdgg
	// 	'Code Wars',
	// 	[
	// 		[ 'C', 1 ],
	// 		[ 'o', 1  ],
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
	if (string || cb)
		return {
			string,
			cb: cb()
		};
};

const add = (a, b) => a + b;

it('this is text', () => {
	return add(3, 4);
});

for (const [ text, expected ] of examples) {
	it(`text: ${text} `, () => {
		// something
	});
	console.log(orderedCount(text), expected);
}
