function pattern(n) {
	let output = '';
	const arr = [];

	for (let i = 1; i <= n; i++) {
		output = i;
		arr.push(output.toString().repeat(i));
	}
	const joined = arr.join('\n');
	return joined;
}

console.log(pattern(1), '1');
console.log(pattern(2), '1\n22');
console.log(pattern(5), '1\n22\n333\n4444\n55555');
