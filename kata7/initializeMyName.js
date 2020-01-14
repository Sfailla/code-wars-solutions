function initializeNames(name) {
	let namesArray = name.split(' ');
	let firstName = namesArray[0];
	let lastName = namesArray[namesArray.length - 1];
	let resultArray = [];
	let finalArray;

	if (namesArray.length > 2) {
		for (let i = 1; i < namesArray.length - 1; i++) {
			const element = namesArray[i];
			resultArray.push(`${element[0]}.`);
		}

		finalArray = [ firstName, resultArray.join(' '), lastName ].join(
			' '
		);
	} else {
		finalArray = name;
	}

	return finalArray;
}

function initializeNames(name) {
	let n = name.split(' ');

	if (n.length < 3) return name;

	for (let i = 1; i < n.length - 1; i++) {
		n[i] = n[i][0] + '.';
	}

	return n.join(' ');
}

console.log(initializeNames('Jack Ryan'), 'Jack Ryan', '');
// console.log(initializeNames('Dimitri'), 'Dimitri', '');
// console.log(initializeNames('Lois Mary Lane'), 'Lois M. Lane', '');
// console.log(
// 	initializeNames('Alice Betty Catherine Davis'),
// 	'Alice B. C. Davis',
// 	''
// );
