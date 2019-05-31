//  Return a flattened sorted array.  sorted from smallest to largest

'use strict';

function flattenAndSort(array) {
	// Good luck, brave code warrior!
	array = array
		.reduce((acc, cum) => {
			return acc.concat(cum);
		}, [])
		.sort((a, b) => a - b);
	console.log(array);
	return array;
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
flattenAndSort([ [ 3, 2, 1 ], [ 4, 6, 5 ], [], [ 9, 7, 8 ] ]);
