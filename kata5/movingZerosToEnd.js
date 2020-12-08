var moveZeros = function(arr) {
	const noZeros = [],
		zeros = [];
	arr.map(num => (num !== 0 ? noZeros.push(num) : zeros.push(num)));
	return noZeros.concat(zeros);
};

// CLEVER ANSWER

var moveZeros = function(arr) {
	return arr.filter(num => num !== 0).concat(arr.filter(num => num === 0));
};

console.log(
	JSON.stringify(moveZeros([ 1, 2, 0, 1, 0, 1, 0, 3, 0, 1 ])),
	JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
);

console.log(moveZeros([ false, 1, 0, 1, 2, 0, 1, 3, 'a' ]), [
	false,
	1,
	1,
	2,
	1,
	3,
	'a',
	0,
	0
]);
