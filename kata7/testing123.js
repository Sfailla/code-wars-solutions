const number = function(array) {
	const newArray = [];

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		const strReturn = `${i + 1}: ${element}`;
		newArray.push(strReturn);
	}

	return newArray;
};

console.log(number([]), [], 'Empty array should return empty array');
console.log(
	number([ 'a', 'b', 'c' ]),
	[ '1: a', '2: b', '3: c' ],
	'Return the correct line numbers'
);
