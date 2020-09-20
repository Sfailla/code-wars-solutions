String.prototype.trim = function(c) {
	// code goes here
	const that = this;
	let copyArray = that;
	let checkCase;
	let letters = Object.values(copyArray);

	if (!c) {
		checkCase = ' ';
		// checkCase = c === c.toLowerCase() ? c.toUpperCase() : c;
	} else {
		checkCase = c.toLowerCase() || c.toUpperCase();
	}
	const trimRight = string => {
		let i = 1;
		let target = checkCase;
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
		let target = checkCase;
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
