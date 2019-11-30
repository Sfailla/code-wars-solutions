function clean(arr) {
	// set empty array to store our array values that we want to keep
	let array = [];
	// filter array and remove any empty spaces
	arr.filter(val => {
		// if array item is not blank we push to our placeholder array
		if (val !== '') {
			array.push(val);
		}
	});
	// finally return array with the valid numbers only
	return array;
}

console.log(clean([ 1, 2, , , 3, 4 ]));
