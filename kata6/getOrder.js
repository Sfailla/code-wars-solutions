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

	let orders = input.match(new RegExp(menu.join('|'), 'gi'))
	  .map(item => item[0].toUpperCase() + item.slice(1))
	  .sort((a, b) => menu.indexOf(a) - menu.indexOf(b));

	return orders.join(' ');
}

getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza');
console.log(getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'));
