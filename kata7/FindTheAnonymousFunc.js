var FindFunction = function(func, arr) {
	return arr.filter(func.filter(v => typeof v === 'function')[0]);
};

console.log(
	FindFunction([ a => a % 2 == 0, 9, 3, 1, 0 ], [ 1, 2, 3, 4 ]),
	[ 2, 4 ]
);
console.log(
	FindFunction([ 9, 3, a => a % 2, 1, 0 ], [ 1, 2, 3, 4 ]),
	[ 1, 3 ]
);
