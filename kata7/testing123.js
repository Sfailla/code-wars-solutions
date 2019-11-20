const number = function(array) {
	const mapped = array.map(val => {
		console.log(val);
		return val;
	});

	return mapped;
};

console.log(number([ 'a', 'b', 'c' ]));
