function points(games) {
	let answer = [];

	games.map(game => {
		let x = game.slice(0, 1);
		let y = game.slice(2, 3);

		if (x > y) {
			answer.push(3);
		} else if (x < y) {
			answer.push(0);
		} else if (x === y) {
			answer.push(1);
		}
	});

	return answer.reduce((acc, val) => {
		return acc + val;
	}, 0);
}

// prettier-ignore
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
