function houseNumbersSum(inputArray) {
	//coding and coding..
	const array = [];

	for (let i = 0; i < inputArray.length; i++) {
		const el = inputArray[i];
		if (el === 0) {
			break;
		}
		array.push(el);
	}

	return array.reduce((acc, item) => acc + item, 0);
}

console.log(houseNumbersSum([ 5, 1, 2, 3, 0, 1, 5, 0, 2 ]), 11);
console.log(houseNumbersSum([ 4, 2, 1, 6, 0 ]), 13);
console.log(houseNumbersSum([ 4, 1, 2, 3, 0, 10, 2 ]), 10);
console.log(houseNumbersSum([ 0, 1, 2, 3, 4, 5 ]), 0);
