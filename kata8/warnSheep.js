function warnTheSheep(queue) {
	//   console.log(queue)

	let isWolf = queue[queue.length - 1];

	let msg;

	if (isWolf === 'wolf') {
		return 'Pls go away and stop eating my sheep';
	} else {
		queue.map((type, i) => {
			if (type === 'wolf') {
				msg = `Oi! Sheep number ${queue.length -
					i -
					1}! You are about to be eaten by a wolf!`;
			}
		});
		return msg;
	}
}
console.log(
	warnTheSheep([
		'sheep',
		'sheep',
		'sheep',
		'sheep',
		'sheep',
		'sheep',
		'sheep',
		'wolf'
	])
);
