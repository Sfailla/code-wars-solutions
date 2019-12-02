function getMiddle(s) {
	//Code goes here!

	let element = [ ...s ];
	let sliced, len;

	len = element.length;

	console.log(element);

	if (len % 2 === 0) {
		console.log('needs to remove 2');
		sliced = element.slice(len / 2 - 1, len / 2 + 1);
	} else {
		console.log('remove 1');
		element = element.slice(4);
	}

	console.log(element);

	return s;
}

console.log(getMiddle('testing')); // es
