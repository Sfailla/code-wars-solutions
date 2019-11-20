function getOrder(input) {
	let menu = [
		'Burger',
		'Fries',
		'Chicken',
		'Pizza',
		'Sandwich',
		'Onionrings',
		'Milkshake',
		'Coke'
	];

	let array = [];

	let orders = input
		.match(new RegExp(menu.join('|'), 'gi'))
		.map(item => item[0].toUpperCase() + item.slice(1))
		.sort((a, b) => menu.indexOf(a) - menu.indexOf(b));

	orders.map(val => {
		if (array.indexOf(val) === -1) {
			array.push(val);
		}
	});

	return array.join(' ');
}

getOrder(
	'milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'
);
console.log(
	getOrder(
		'milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'
	)
);
