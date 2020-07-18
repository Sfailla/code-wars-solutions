function solve(s) {
	function getCount(string) {
		let count = 0;
		string.split('').forEach(letter => {
			letter === letter.toUpperCase();
			if (letter === letter.toUpperCase()) {
				count++;
			}
		});
		return count;
	}
	const stringCount = s.length;
	const count = getCount(s);

	return count > stringCount / 2
		? (s = s.toUpperCase())
		: (s = s.toLowerCase());
}

console.log(solve('CODe'), 'CODE');
console.log(solve('COde'), 'code');
console.log(solve('Code'), 'code');
console.log(solve('code'), 'code');
