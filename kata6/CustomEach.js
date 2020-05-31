Array.prototype.each = function(func, search) {
	let array = this;
	search;

	for (let i = 0; i < array.length; i++) {
		const el = array[i];
		func(el, i);
	}
};

let items = [ 'a', 'b', 'c', 'd', 'e' ];
let allowedLetters = [];

items.each((letter, i) => {
	if (letter === 'd') {
		return true;
	}

	allowedLetters.push(letter);
});

allowedLetters;
