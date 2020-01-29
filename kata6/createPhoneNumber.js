function createPhoneNumber(numbers) {
	const regex = /\(?(\d{3})\)?(\d{3})(\d{4})/g;
	const subst = '($1) $2-$3';
	const result = numbers.join('').replace(regex, subst);

	return result;
}

console.log(
	createPhoneNumber([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]),
	'(123) 456-7890'
);
console.log(
	createPhoneNumber([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]),
	'(111) 111-1111'
);
console.log(
	createPhoneNumber([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]),
	'(123) 456-7890'
);
