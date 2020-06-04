function reverse(arr) {
	function returnInPlace(arr) {
		for (let i = 0; i < Math.floor((arr.length - 1) / 2); i++) {
			let el = arr[i];
			arr[i] = arr[arr.length - 1 - i];
			arr[arr.length - 1 - i] = el;
		}
		return arr;
	}

	return returnInPlace(arr);
}

let array = [ 1, 2, 3, 4, 5, 6 ];
// let array = ['hello','world','how','are','you','?']
console.log(reverse(array)); // [5, 4, 3, 2, 1]

[
	[ [ 1, 2, 3, 4, 5 ], [ 5, 4, 3, 2, 1 ] ],
	[
		[ 'hello', 'world', 'how', 'are', 'you', '?' ],
		[ '?', 'you', 'are', 'how', 'world', 'hello' ]
	],
	[ [ { a: 1 }, { b: 2 } ], [ { b: 2 }, { a: 1 } ] ]
].forEach(([ inp, exp ]) => {
	reverse(inp);
	console.log(inp, exp);
});
