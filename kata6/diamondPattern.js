// function diamond(n) {
// 	let num = n;
// 	if (num < 0 || num % 2 === 0) {
// 		console.log(num);
// 		return null;
// 	}

// 	let diamonds = {
// 		1: '*\n',
// 		3: ' *\n***\n *\n',
// 		5: '  *\n ***\n*****\n ***\n  *\n',
// 		7: '   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n'
// 	};

// 	for (let [ keys, value ] of Object.entries(diamonds)) {
// 		let key = parseInt(keys);

// 		if (num === key) {
// 			console.log(value);
// 			return value;
// 		}
// 	}

// 	return num;
// }

// diamond(7);
// console.log(diamond(3));

function diamond(n) {
	// let num = n;
	// let string = '';

	// if (num === 1) {
	// 	return '*';
	// } else if (num < 0 || num % 2 === 0) {
	// 	return null;
	// } else {
	// 	while (num > 0) {
	// 		string += '*';
	// 		num--;
	// 	}
	// 	string += '\n';

	// 	console.log(string);
	// }

	let str = '';
	let y = n;
	let x = y;

	for (let i = 1; i < y; i++) {
		for (let j = 1; j < x; j++) {
			if (i <= y / 2 && j >= y / 2 - (i - 1) && j <= y / 2 + (i - 1)) {
				str = str.concat('*');
			} else if (i >= y / 2 && j > (y / 2 - i) * -1 && j < y - (y / 2 - i) * -1) {
				str = str.concat('*');
			} else {
				str = str.concat(' ');
			}
		}
		str = str.concat('\n');
	}

	console.log(str);
}

diamond(5);
console.log(diamond(5));
