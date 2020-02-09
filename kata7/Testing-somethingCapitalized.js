function testit(s) {
	if (!s.length) return '';

	const map = s
		.split(' ')
		.map(val => {
			const lastIdx = val.length - 1;
			return val.slice(0, lastIdx) + val[lastIdx].toUpperCase();
		})
		.join(' ');

	return map;
}

console.log(testit(''), '', '');
console.log(testit('no coat'), 'nO coaT', '');
console.log(testit('pj'), 'pJ', '');
console.log(testit('ptj y om'), 'ptJ Y oM', '');
console.log(testit('a b'), 'A B', '');
console.log(testit('a b c'), 'A B C', '');
