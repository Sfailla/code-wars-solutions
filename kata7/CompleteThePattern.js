function pattern(n) {
	const s = Array.from({ length: n }, (m, i) => n - i);
	let mapped = s.map((val, i) => s.slice(0, n - i).join(''));
	return mapped.join('\n');
}

// console.log(pattern(1),"1");
// console.log(pattern(2),"21\n2");
console.log(pattern(5), '54321\n5432\n543\n54\n5');
