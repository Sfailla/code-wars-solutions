function isIsogram(str) {
	//...
	const sameCase = str.toLowerCase().split('');
	const array = [];

	for (let i = 0; i < sameCase.length; i++) {
		const element = sameCase[i];
		if (array.indexOf(element) === -1) {
			array.push(element);
		}
	}

	return sameCase.length === array.length ? true : false;
}

console.log(isIsogram('Dermatoglyphics'), true);
console.log(isIsogram('isogram'), true);
console.log(
	isIsogram('aba'),
	false,
	'same chars may not be adjacent'
);
console.log(
	isIsogram('moOse'),
	false,
	'same chars may not be same case'
);
console.log(isIsogram('isIsogram'), false);
console.log(
	isIsogram(''),
	true,
	'an empty string is a valid isogram'
);
