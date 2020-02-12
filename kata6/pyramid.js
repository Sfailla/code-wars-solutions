function pyramid(n) {
	// code here
	const filler = 1;
	const arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(Array(i).fill(filler));
	}
	return arr;
}

// console.log(pyramid(0), []);
// console.log(pyramid(1), [ [ 1 ] ])
// );
console.log(pyramid(2), [ [ 1 ], [ 1, 1 ] ]);
// console.log(pyramid(3), [ [ 1 ], [ 1, 1 ], [ 1, 1, 1 ] ])
