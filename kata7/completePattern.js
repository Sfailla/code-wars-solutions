function pattern(n) {
	var output = '';
	let arr = [];

	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}

	let i = 1;
	while (i <= arr.length) {
		output += i;
		i++;
	}

	output;

	arr;

	let count = 1;
	const map = arr.map((val, i) => {
		i = i + 1;
		return Array(i).fill(i);
	});

	// return output
}

// console.log(pattern(1),"1");
// console.log(pattern(2),"1\n22");
console.log(pattern(5), '1\n22\n333\n4444\n55555');
