function descendingOrder(n) {
	// split integer to an array of str numbers.
	// cant split unless converted to str.
	let numToStr = n.toString().split('');
	// sort the array
	numToStr.sort((a, b) => {
		return b - a;
	});
	// join the array and parse Integer
	let result = parseInt(numToStr.join(''));
	// return result
	return result;
}

descendingOrder(123456789);

console.log(descendingOrder(123456789));
