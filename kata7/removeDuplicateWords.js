function removeDuplicateWords(s) {
	// your perfect code...

	const splitString = s.split(' ');
	const result = [];

	splitString.map(val => {
		result.indexOf(val) === -1 ? result.push(val) : null;
	});

	return result.join(' ');
}

console.log(
	removeDuplicateWords(
		'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
	)
);

// solution ==> 'alpha beta gamma delta'
