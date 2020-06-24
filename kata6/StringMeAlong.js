function createMessage(...args) {
	const messages = [];
}

console.log(
	createMessage('Hello')('World!')('how')('are')('you?')(),
	'Hello World! how are you?'
);
