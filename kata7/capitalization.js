function capitalize(s) {
	let odd = [ ...s ]
		.map((v, i) => (i % 2 !== 0 ? v.toUpperCase() : v))
		.join('');
	let even = [ ...s ]
		.map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v))
		.join('');

	return [ even, odd ];
}

console.log(capitalize('abcdef'), [ 'AbCdEf', 'aBcDeF' ]);
console.log(capitalize('codewars'), [ 'CoDeWaRs', 'cOdEwArS' ]);
console.log(capitalize('abracadabra'), [
	'AbRaCaDaBrA',
	'aBrAcAdAbRa'
]);
console.log(capitalize('codewarriors'), [
	'CoDeWaRrIoRs',
	'cOdEwArRiOrS'
]);
