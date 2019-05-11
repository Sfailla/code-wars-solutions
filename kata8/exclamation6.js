function remove(str, n) {
	let counter = 0;

	while (counter < n) {
		str = str.r();
		counter++;
	}
	console.log(str);
	return str;
}

String.prototype.r = function() {
	return this.replace(/!/, '');
};

// remove('Hi!', 1);
remove('Hi!!!', 3);
