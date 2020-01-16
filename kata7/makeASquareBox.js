function box(n) {
	//your code here
	let num = n;
	// main peices are - * n
	// side peices are n - 2;

	function boxTop(size) {
		let b = '';

		while (size > 0) {
			b += '-';
			n--;
		}

		return b;
	}

	function boxSide(size) {
		let c = '';

		while (size > 0) {
			c += '-';
			n--;
		}

		return c;
	}

	boxTop();
	boxSide();
}

console.log(box(5), [ '-----', '-   -', '-   -', '-   -', '-----' ]);
// console.log(box(2), ["--", "--"]);
// console.log(box(4), ["----", "-  -", "-  -", "----"]);
// console.log(box(6), ["------", "-    -", "-    -", "-    -", "-    -", "------"]);
// console.log(box(3), ["---", "- -", "---"]);
