const createBot = (X, Y) => {
	const randomBot = {
		name: 'Random',
		makeMove: onTable => Math.floor(Math.random() * 5) + 1
	};

	return randomBot;
};

console.log(
	whoLose([ createBot(23, 3), randomBot ], 23, 3) === 1,
	'YOU LOST!!!'
);
