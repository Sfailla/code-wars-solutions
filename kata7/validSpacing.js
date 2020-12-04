function validSpacing(s) {
	function checkFirstAndLast(str) {
		const split = [ ...str ];
		const firstItem = split[0];
		const lastItem = split[split.length - 1];

		const result = firstItem === ' ' || lastItem === ' ';
		return result ? false : true;
	}

	function checkMiddleSpacing(str) {
		const regex = /['  ']\s/g;

		if (str.match(regex)) {
			return false;
		}
		return true;
	}

	const results = [ checkMiddleSpacing(s), checkFirstAndLast(s) ];

	return results.includes(false) ? false : true;
}

// # CLEVER ANSWER

function validSpacing(s) {
	// trim the string and see if it matches original. then check to see if
	// there is double spacing.
	return s.trim() == s && !s.includes('  ');
}

console.log(validSpacing('Hello world'), true);
console.log(validSpacing(' Hello world'), false);
console.log(validSpacing('Hello  world '), false);
console.log(validSpacing('Hello'), true);
console.log(validSpacing('v d  PadQo'), false);
