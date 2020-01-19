function box(n) {
	//your code here

	function boxTop(size) {
		let b = '';
		while (size > 0) {
			b += '-';
			size--;
		}
		return b;
	}

	function boxSide(size) {
		let num = size;
		let c = '';
		while (num > 0) {
			c += '-';
			num--;
		}
		const split = c.split('');
		const map = split.map((s, i) => {
			if (i > 0 && i < split.length - 1) {
				s = ' ';
				return s;
			} else {
				return s;
			}
		});
		return map.join('');
	}

	function amountOfSides(boxSide) {
		const array = [];
		let times = num - 2;
		while (times > 0) {
			array.push(boxSide);
			times--;
		}
		return array;
	}

	const num = n;
	const top = boxTop(num);
	const bottom = boxTop(num);
	const side = boxSide(num);

	const boxArray = [ top, amountOfSides(side), bottom ];
	const finalArray = boxArray.reduce(
		(acc, item) => acc.concat(item),
		[]
	);

	return finalArray;
}

// very clever solution
function box(n) {
	return [
		'-'.repeat(n),
		...Array(n - 2).fill('-' + ' '.repeat(n - 2) + '-'),
		'-'.repeat(n)
	];
}

console.log(box(5), [ '-----', '-   -', '-   -', '-   -', '-----' ]);
console.log(box(2), [ '--', '--' ]);
console.log(box(4), [ '----', '-  -', '-  -', '----' ]);
console.log(box(6), [
	'------',
	'-    -',
	'-    -',
	'-    -',
	'-    -',
	'------'
]);
console.log(box(3), [ '---', '- -', '---' ]);
