function printerError(s) {
	const printerErrors = [];

	[ ...s ].map((letter, i) => {
		const code = s.toLowerCase().charCodeAt(i);
		return code > 96 && code < 110
			? letter
			: printerErrors.push(letter);
	});

	const errorLog = `${printerErrors.length}/${s.length}`;

	return errorLog;
}

let s;
s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
console.log(printerError(s), '3/56');

s = 'aaabbbbhaijjjm';
console.log(printerError(s), '0/14');

s = 'aaaxbbbbyyhwawiwjjjwwm';
console.log(printerError(s), '8/22');
