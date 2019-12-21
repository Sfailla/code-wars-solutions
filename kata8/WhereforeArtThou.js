function whatIsInAName(collection, source) {
	// What's in a name?
	var arr = [];
	// Only change code below this line

	var srcKeys = Object.keys(source);

	return collection.filter(function(obj) {
		return srcKeys.every(function(key) {
			return obj.hasOwnProperty(key) && obj[key] === source[key];
		});
	});

	// Only change code above this line
	return arr;
}

console.log(
	whatIsInAName(
		[
			{ first: 'Romeo', last: 'Montague' },
			{ first: 'Mercutio', last: null },
			{ first: 'Tybalt', last: 'Capulet' }
		],
		{ last: 'Capulet' }
	),
	[ { first: 'Tybalt', last: 'Capulet' } ]
);

console.log(
	whatIsInAName(
		[ { apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 } ],
		{ apple: 1 }
	),
	[ { apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 } ]
);

console.log(
	whatIsInAName([ { a: 1, b: 2, c: 3 } ], { a: 1, b: 9999, c: 3 }),
	[]
);
