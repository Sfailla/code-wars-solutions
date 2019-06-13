const meeting = s => {
	const regex = /[:]/gi;

	s = s.replace(regex, ' ').split(';');

	let result = [];
	let firstName, lastName, fullName;

	for (i = 0; i < s.length; i++) {
		firstName = s[i].toUpperCase().split(' ')[0];
		lastName = s[i].toUpperCase().split(' ')[1];

		fullName = `(${lastName}, ${firstName})`;

		result.push(fullName);
	}

	let newStr = result.sort().join(' ');
	return newStr;
};

meeting(
	'Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern'
);
console.log(
	meeting(
		'Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern'
	)
);
