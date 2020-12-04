function firstNonConsecutive(arr) {
	let result = null;
	let i = 0;
	while (i < arr.length) {
		if (arr[i] + 1 === arr[i + 1]) {
			i++;
		} else {
			arr[i + 1] === undefined ? result : (result = arr[i + 1]);
			break;
		}
	}

	return result;
}

const first = firstNonConsecutive([ 1, 2, 3, 4, 6, 7, 8 ]);
console.log(first === 6, true);

const second = firstNonConsecutive([ 5, 6, 7, 8, 9, 11, 12, 13, 14 ]);
console.log(second);

const third = firstNonConsecutive([ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]);
console.log(third);
