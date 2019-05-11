function gooseFilter(birds) {
	var geese = [
		'African',
		'Roman Tufted',
		'Toulouse',
		'Pilgrim',
		'Steinbacher'
	];

	let answer = [];

	let diff = birds.filter(bird => !geese.includes(bird));

	answer.concat(diff);

	return answer;
}

//prettier-ignore
gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
