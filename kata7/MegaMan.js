class Boss {
	constructor(name, weapon, weakness, difficulty) {
		this.name = name; // string
		this.weapon = weapon; // string
		this.weakness = weakness; // string
		this.difficulty = difficulty; // Integer in [1,8]
	}
}

let bosses = [
	new Boss('Wood Man', 'Leaf Shield', 'Atomic Fire', 7),
	new Boss('Air Man', 'Air Shooter', 'Leaf Shield', 4),
	new Boss('Metal Man', 'Metal Blade', 'Quick Boomerang', 1),
	new Boss('Crash Man', 'Crash Bomber', 'Air Shooter', 3),
	new Boss('Quick Man', 'Quick Boomerang', 'Time Stopper', 8),
	new Boss('Flash Man', 'Time Stopper', 'Crash Bomber', 6),
	new Boss('Heat Man', 'Atomic Fire', 'Bubble Lead', 5),
	new Boss('Bubble Man', 'Bubble Lead', 'Metal Blade', 2)
];

function getBossOrder(bosses) {
	let count = 1;
	function findWeakness(currentBoss) {
		let bossList = [];

		if (bossList.indexOf(currentBoss) === -1) {
			bossList.push(currentBoss);
		}

		console.log(currentBoss);
		bossList;

		return bosses.map(boss => {
			if (
				currentBoss.weapon === boss.weakness &&
				count < bosses.length
			) {
				count++;
				findWeakness(boss);
			} else {
				return bossList;
			}
		});
	}

	let firstBoss = bosses.filter(boss => boss.difficulty === 1)[0];
	firstBoss;

	findWeakness(firstBoss);

	return bosses[0];
}

console.log(getBossOrder(bosses), [
	'Metal Man',
	'Bubble Man',
	'Heat Man',
	'Wood Man',
	'Air Man',
	'Crash Man',
	'Flash Man',
	'Quick Man'
]);
