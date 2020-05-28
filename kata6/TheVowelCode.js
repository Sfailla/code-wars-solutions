const letterMap = { a: 1, e: 2, i: 3, o: 4, u: 5 };

function encode(string) {
	const strArray = string.split('');
	const keys = Object.keys(letterMap);

	let encodeString = strArray
		.map(el => {
			if (keys.includes(el)) {
				el = letterMap[el];
				return el;
			}
			return el;
		})
		.join('');

	return encodeString;
}

function decode(string) {
	const strArray = string.split('');
	const keys = Object.keys(letterMap);
	const vals = Object.values(letterMap);

	const decodeString = strArray
		.map((el, i) => {
			keys.map(key => {
				if (
					vals.includes(Number(el)) &&
					Number(el) === letterMap[key]
				) {
					el = key;
					return el;
				}
			});
			return el;
		})
		.join('');

	return decodeString;
}

// VERY CLEVER SOLUTION
// function encode(string){
//   const mapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5}
//   // makes perfect sense now that I see it!!
//   return string.split('').map(char => {
//     return mapping[char] || char;
//   }).join('');

// }

console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(
	encode('This is an encoding test.'),
	'Th3s 3s 1n 2nc4d3ng t2st.'
);
console.log(decode('h2ll4'), 'hello');
