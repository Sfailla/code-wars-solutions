const sortme = function(names) {
	let upperC = [];

	let mapUpperCaseLetters = function mapper(el, array) {
		if (el[0] === el[0].toLowerCase()) {
			return el;
		} else if (el[0] === el[0].toUpperCase()) {
			array.push(el.toLowerCase());
			return el.toLowerCase();
		}
		return el;
	};

	let mapped = names.map((element, i) => {
		if (element.length === 1) {
			return mapUpperCaseLetters(element, upperC);
		} else if (element.length > 1) {
			return mapUpperCaseLetters(element, upperC);
		}
	});

	let sorted = mapped.sort().map(lett => {
		if (upperC.includes(lett)) {
			return lett[0].toUpperCase() + lett.slice(1);
		} else {
			return lett;
		}
	});

	return sorted;
};

console.log(sortme([ 'Hello', 'there', "I'm", 'fine' ])); // [	'fine', 'Hello', "I'm", 'there']

console.log(sortme([ 'C', 'd', 'a', 'B' ])); //  [ 'a', 'B', 'C', 'd' ]
