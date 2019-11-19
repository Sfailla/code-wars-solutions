function clean(arr) {
	let array = [];

	arr.filter(val => {
		if (val !== '') {
			array.push(val);
		}
	});

	return array;
}

console.log(clean([ 1, 2, , , 3, 4 ]));
