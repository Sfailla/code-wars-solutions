function numCombo(arr, num) {
	let map = {};

	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];

		map[el] = map[el] || 0;
		map[el]++;
	}

	map;
	num;
}

console.log(numCombo([ 2, 0, 0, 0, 1 ], 2), 1);
console.log(numCombo([ 2, 0, 0, 0, 1 ], 1), 1);
console.log(numCombo([ 2, 0, 0, 0, 1 ], 3), 3);
console.log(numCombo([ 0, 0, 0, 0, 0 ], 0), 5);
console.log(numCombo([ 0, 0, 0, 0, 1 ], 1), 4);
console.log(numCombo([ 0, 0, 0, 0, 1 ], 2), 0);
