function digitalRoot(n) {
	const arrayItems = [];
	// function that takes an array value (number) and splits the number up
	// so each item is a single digit. ([425] => ['4', '2', '5']);
	function getArrayCount(array) {
		return array.join('').split('');
	}
	// recursive function to get sum of array
	function sumArray(array) {
		// split
		let split = getArrayCount(array);
		const total = split.reduce((acc, arr) => acc + parseInt(arr), 0);
		const totalToArray = [].concat(total);
		const count = getArrayCount(totalToArray).length;

		const isReady = count > 1 ? sumArray(totalToArray) : totalToArray;

		return isReady;
	}

	arrayItems.push(n);

	const total = sumArray(arrayItems).join('');

	return parseInt(total);
}

console.log(digitalRoot(942), 6);
console.log(digitalRoot(16), 7);
console.log(digitalRoot(456), 6);
console.log(digitalRoot(493193), 2);
