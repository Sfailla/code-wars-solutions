// Return the output array, and ignore all non-op characters
function parse(data) {
	const array = [];
	let total = 0;
	data = data.split('');
	data.map(val => {
		if (val === 'i') {
			total += 1;
		} else if (val === 'd') {
			total -= 1;
		} else if (val === 's') {
			total = total ** 2;
		} else if (val === 'o') {
			array.push(total);
		}
	});
	return array;
}

console.log(parse('iiisdoso'), [ 8, 64 ]);
console.log(parse('iiisxxxdoso'), [ 8, 64 ]);
