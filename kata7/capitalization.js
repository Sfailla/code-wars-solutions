function capitalize(s) {
	let arr = s.split(''),
		arr1,
		arr2,
		finalArr;

	function alternateCapitalization(array, evenOrOdd) {
		let arr = [];
		array.map((letter, idx) => {
			if (evenOrOdd === 'even') {
				if (idx % 2 === 0) {
					arr.push(letter.toUpperCase());
				} else {
					arr.push(letter);
				}
			} else if (evenOrOdd === 'odd') {
				if (idx % 2 !== 0) {
					arr.push(letter.toUpperCase());
				} else {
					arr.push(letter);
				}
			}
		});

		return arr.join('');
	}

	arr1 = alternateCapitalization(arr, 'even');
	arr2 = alternateCapitalization(arr, 'odd');

	finalArr = [ arr1, arr2 ];

	return finalArr;
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
