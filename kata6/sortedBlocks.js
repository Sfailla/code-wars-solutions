function blocks(s) {
	let string = s;
	let stringArray = string.split('');

	let lowerRegex = /[a-z]/g;
	let upperRegex = /[A-Z]/g;
	let numberRegex = /[0-9]/g;

	let duplicatesArr = [],
		finalArr = [];

	if (!string) return '';

	stringArray = stringArray.sort();

	let mapped = stringArray.map(val => {
		if (finalArr.indexOf(val) === -1) {
			if (val.match(lowerRegex) && val === val.toLowerCase()) {
				finalArr.push(val);
			} else if (val.match(upperRegex) && val === val.toUpperCase()) {
				finalArr.push(val);
			} else if (val.match(numberRegex)) {
				finalArr.push(val);
			}
		} else {
			// do something
		}
	});

	finalArr;
}

// console.log(blocks('abacad'), 'abcd-a-a');
console.log(blocks('21AxBz'), 'xzAB12');
// console.log(blocks(''), '');
