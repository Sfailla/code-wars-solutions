function findChildren(santasList, children) {
	// Your code
	const finalNames = [];

	santasList.map(names => {
		if (children.indexOf(names) !== -1) {
			finalNames.push(names);
		}
	});

	return finalNames;
}

console.log(
	findChildren(
		[ 'Jason', 'Jackson', 'Jordan', 'Johnny' ],
		[ 'Jason', 'Jordan', 'Jennifer' ]
	),
	[ 'Jason', 'Jordan' ]
);
console.log(
	findChildren(
		[ 'jASon', 'JAsoN', 'JaSON', 'jasON' ],
		[ 'JasoN', 'jASOn', 'JAsoN', 'jASon', 'JASON' ]
	),
	[ 'JAsoN', 'jASon' ]
);
console.log(
	findChildren(
		[ 'Jason', 'James', 'Johnson' ],
		[ 'Jason', 'James', 'JJ' ]
	),
	[ 'James', 'Jason' ]
);
