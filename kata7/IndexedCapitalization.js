function capitalize(s, arr) {
	return s
		.split('')
		.map((letter, idx) => {
			return arr.includes(idx)
				? (letter = letter.toUpperCase())
				: letter;
		})
		.join('');
}

console.log(capitalize('abcdef', [ 1, 2, 5 ]), 'aBCdeF');
console.log(capitalize('abcdef', [ 1, 2, 5, 100 ]), 'aBCdeF');
console.log(capitalize('codewars', [ 1, 3, 5, 50 ]), 'cOdEwArs');
console.log(capitalize('codewarriors', [ 5 ]), 'codewArriors');
console.log(capitalize('indexinglessons', [ 0 ]), 'Indexinglessons');
console.log(
	capitalize('abracadabra', [ 2, 6, 9, 10 ]),
	'abRacaDabRA'
);
