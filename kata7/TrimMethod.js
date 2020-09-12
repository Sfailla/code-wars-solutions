String.prototype.trim = function(c) {
	// code goes here
	const that = this;

	let letters = Object.values(that.toLocaleLowerCase());

	let i = 0;
	let j = 1;
	that;
	letters;

	while (i < letters.length) {
		if (letters[i] === c) {
			i++;
		} else {
			i;
			letters = letters.slice(i);
			break;
		}

		if (letters[letters.length - j] === c) {
			j++;
		} else {
		}
	}

	letters;

	// while ()

	// return letters.filter(letter => {
	// 	return letter !== c
	// } )
	// .replace(c.toLowerCase(), '');
	// return that.replace(c.toLowerCase(), '');
};

// let str = 'Hello Worldlll';
// str = str.trim('l');
// console.log(str);

console.log('LLLHello Worldlll'.trim('l'), 'Hello World');
// console.log('   Hello World                 '.trim(), 'Hello World');
// console.log('XVisca ElbarcaXX'.trim('X'), 'Visca Elbarca');
