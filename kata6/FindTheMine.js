function mineLocation(field) {
	let array = [];

	let reduced = field.reduce((obj, item, idx) => {
		obj[idx] = item;
		return obj;
	}, {});

	for (let [ key, val ] of Object.entries(reduced)) {
		if (val.includes(1)) {
			let index = val.indexOf(1);
			let newKey = Number(key);
			array = [ newKey, index ];
		}
	}

	return array;
}

function mineLocation(field) {
	for (let i = 0; i < field.length; i++) {
		for (let j = 0; j < field[i].length; j++) {
			if (field[i][j] === 1) {
				return [ i, j ];
			}
		}
	}
}

console.log(mineLocation([ [ 1, 0 ], [ 0, 0 ] ]), [ 0, 0 ]);
console.log(mineLocation([ [ 1, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]), [
	0,
	0
]);
console.log(
	mineLocation([
		[ 0, 0, 0, 0 ],
		[ 0, 0, 0, 0 ],
		[ 0, 0, 1, 0 ],
		[ 0, 0, 0, 0 ]
	]),
	[ 2, 2 ]
);
