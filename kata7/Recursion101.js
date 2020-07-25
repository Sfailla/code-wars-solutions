function solve(a, b) {
	let array = [];

	function step1(a, b) {
		if (a === 0 || b === 0) {
			array = [ a, b ];
		} else {
			return step2(a, b);
		}
	}

	function step2(a, b) {
		if (a >= 2 * b) {
			a = a - 2 * b;
			step1(a, b);
		} else {
			step3(a, b);
		}
	}

	function step3(a, b) {
		if (b >= 2 * a) {
			b = b - 2 * a;
			step1(a, b);
		} else {
			array = [ a, b ];
			return [ a, b ];
		}
	}

	step1(a, b);
	return array;
}

console.log(solve(6, 19), [ 6, 7 ]);
console.log(solve(2, 1), [ 0, 1 ]);
console.log(solve(22, 5), [ 0, 1 ]);
console.log(solve(2, 10), [ 2, 2 ]);
