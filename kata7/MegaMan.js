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
	// set weapon to null
	let weapon = null;
	// loop thru bosses
	return bosses.map(boss => {
		// filter bosses with conditions
		let nextBoss = bosses.filter(
			// first boss is the boss with difficulty === 1.
			// once first boss is established, we look for weapon === weakness
			x => (weapon ? x.weakness === weapon : x.difficulty === 1)
		)[0];
		// next assign weapon a value of nextBoss.weapon
		weapon = nextBoss.weapon;
		// now that list is in correct order return names
		return nextBoss.name;
	});
}

function getBossOrder(bosses) {
	let weapon = null;

	return bosses.map(_ => {
		let nextBoss = bosses.filter(
			x => (weapon ? x.weakness === weapon : x.difficulty === 1)
		)[0];

		weapon = nextBoss.weapon;
		return nextBoss.name;
	});
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
