String.prototype.trim = function(c) {
	// code goes here
	const that = this;
	let copyArray = that;

	console.log(copyArray);

	let letters = Object.values(copyArray);

	if (c !== undefined) {
		c = c.toLowerCase() || c.toUpperCase();
	}

	const trimRight = string => {
		let i = 1;
		let target = c || ' ';
		while (i < string.length) {
			if (string[string.length - i] === target) {
				++i;
			} else {
				string = string.slice(0, -i + 1);
				break;
			}
		}
		return string;
	};

	const trimLeft = string => {
		let i = 0;
		let target = c || ' ';
		while (i < string.length) {
			if (string[i] === target) {
				++i;
			} else {
				string = string.slice(i);
				break;
			}
		}
		return string;
	};

	copyArray = trimLeft(letters);
	copyArray = trimRight(copyArray);

	return copyArray.join('');
};

// let str = 'Hello Worldlll';
// str = str.trim('l');
// console.log(str);

console.log('LLLHello Worldlll'.trim('l'), 'Hello World');
console.log('   Hello World                 '.trim(), 'Hello World');
console.log('XVisca ElbarcaXX'.trim('X'), 'Visca Elbarca');
