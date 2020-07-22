function maxDiff(list) {
	if (!list.length) return 0;

	const sorted = list.sort((a, b) => a - b);
	const max = Math.max(...sorted);
	const min = Math.min(...sorted);
	const diff = max - min;

	return diff;
}

console.log(maxDiff([ 0, 1, 2, 3, 4, 5, 6 ]), 6);
console.log(maxDiff([ -0, 1, 2, -3, 4, 5, -6 ]), 11);
console.log(maxDiff([ 0, 1, 2, 3, 4, 5, 16 ]), 16);
console.log(maxDiff([ 16 ]), 0);
console.log(maxDiff([]), 0);
