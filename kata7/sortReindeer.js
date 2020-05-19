function sortReindeer(reindeerNames) {
	const sorted = reindeerNames.sort((a, b) => {
		a = a.split(' ')[1];
		b = b.split(' ')[1];

		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	});

	return sorted;
}

let input = [
	'Dasher Tonoyan',
	'Dancer Moore',
	'Prancer Chua',
	'Vixen Hall',
	'Comet Karavani',
	'Cupid Foroutan',
	'Donder Jonker',
	'Blitzen Claus'
];
let output = [
	'Prancer Chua',
	'Blitzen Claus',
	'Cupid Foroutan',
	'Vixen Hall',
	'Donder Jonker',
	'Comet Karavani',
	'Dancer Moore',
	'Dasher Tonoyan'
];

console.log(sortReindeer(input), output);
