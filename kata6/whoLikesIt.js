function likes(names) {
	if (!names.length) {
		return `no one likes this`;
	} else if (names.length === 1) {
		return `${names.join('')} likes this`;
	} else if (names.length > 1 && names.length < 4) {
		const firstNames = names.splice(0, names.length - 1).join(', ');
		const lastName = names.slice(names.length - 1).join('');

		return `${firstNames} and ${lastName} like this`;
	} else if (names.length >= 4) {
		const firstNames = names.slice().splice(0, 2).join(', ');
		const remainingNamesCount = names.length - 2;

		return `${firstNames} and ${remainingNamesCount} others like this`;
	}
}

console.log(likes([]), 'no one likes this');
console.log(likes([ 'Peter' ]), 'Peter likes this');
console.log(likes([ 'Jacob', 'Alex' ]), 'Jacob and Alex like this');
console.log(likes([ 'Max', 'John', 'Mark' ]), 'Max, John and Mark like this');
console.log(
	likes([ 'Alex', 'Jacob', 'Mark', 'Max' ]),
	'Alex, Jacob and 2 others like this'
);
