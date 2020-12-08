function solve(arr) {
	let last = [ arr[arr.length - 1] ];
	let pointer = arr.length - 1;

	for (let i = arr.length - 2; i >= 0; i--) {
		const elements = arr[i];
		arr[pointer];

		if (elements > arr[pointer]) {
			last.unshift(elements);
			pointer = i;
		}
	}

	return last;
}

// very creative and makes so much sense to me!!
function solve(arr) {
	// filter the array get the values and index of initial array
	arr.filter((v, i) => {
		// for each number in array we check:
		// arr.slice(i + 1) __<= + 1__ bc we will check initial number in filter (v) against
		// the remaining numbers in the sliced array.
		// if (x < v) __<= or if x - each number in sliced array is < than v -filtered val v
		// return true;
		arr.slice(i + 1).every(x => x < v);
	});
}

console.log(solve([ 16, 17, 14, 3, 14, 5, 2 ]), [ 17, 14, 5, 2 ]);
// console.log(solve([ 92, 52, 93, 31, 89, 87, 77, 105 ]), [ 105 ]);
// console.log(solve([ 75, 47, 42, 56, 13, 55 ]), [ 75, 56, 55 ]);
// console.log(solve([ 67, 54, 27, 85, 66, 88, 31, 24, 49 ]), [ 88, 49 ]);
// console.log(solve([ 76, 17, 25, 36, 29 ]), [ 76, 36, 29 ]);
// console.log(solve([ 104, 18, 37, 9, 36, 47, 28 ]), [ 104, 47, 28 ]);
