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
	function findWeakness(currentBoss, bosses) {
		return bosses.map(boss => {
			if (currentBoss.weapon === boss.weakness) {
				return boss;
			}
		});
	}

	let finalArr = [];

	for (let boss of bosses) {
		let currentBoss;
		if (boss.difficulty === 1) {
			currentBoss = boss;
			finalArr.push(currentBoss);
			let { Boss } = findWeakness(currentBoss, bosses);
			Boss;
		}
	}

	finalArr;

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
