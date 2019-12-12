function findOdd(int) {
	let numberArray = int;
	// map numbers and amount of times they appear in array
	const intMap = numberArray.reduce((acc, val) => {
		acc[val] = acc[val] || 0;
		acc[val]++;
		return acc;
	}, {});

	// iterate over intMap
	for (const [ key, val ] of Object.entries(intMap)) {
		// set variable for odd value
		let odd = val % 2 !== 0;
		// set check for odd value
		if (odd) {
			// return odd value key as interger only
			return parseInt(key);
		}
	}

	// ES5
	// for (const [key, val] in intMap) {
	//   const odd = val % 2 !== 0;
	//   if (odd) {
	//     return parseInt(key)
	//   }
	// }

	// if no int appears odd # of times return false;
	return false;
}

console.log(findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]), -1);
console.log(findOdd([ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ]), 5);
console.log(findOdd([ 10 ]), 10);
console.log(findOdd([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ]), 10);
console.log(findOdd([ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10 ]), 1);
