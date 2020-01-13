function steamrollArray(arr) {
	// I'm a steamroller, baby
	let flatten = array =>
		array.reduce(
			(acc, item) =>
				acc.concat(Array.isArray(item) ? flatten(item) : item),
			[]
		);

	return flatten(arr);
}

steamrollArray([ 1, [ 2 ], [ 3, [ [ 4 ] ] ] ]);
