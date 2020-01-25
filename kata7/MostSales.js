function top3(products, amounts, prices) {
	const getTotal = (a, p, pdcts) => {
		const array = [];
		const reduce = amounts.reduce((obj, item, idx) => {
			obj[idx] = {
				amt: a[idx],
				item: pdcts[idx],
				price: p[idx],
				sum: p[idx] * a[idx]
			};
			return obj;
		}, {});

		reduce;

		for (const [ key, val ] of Object.entries(reduce)) {
			let count = 0;

			reduce[key].sum;
			array.push([ val.sum, val.item ]);
		}
		let sorted = array.sort((a, b) => b[0] - a[0]);
		let finalArr = [];

		for (let i = 0; i < sorted.length; i++) {
			const el = sorted[i];
			if (i < 3) {
				finalArr.push(el[1]);
			}
		}

		return finalArr;
	};

	const total = getTotal(amounts, prices, products);
	return total;
}

// console.log(
// 	top3(
// 		[ 'Computer', 'Cell Phones', 'Vacuum Cleaner' ],
// 		[ 3, 24, 8 ],
// 		[ 199, 299, 399 ]
// 	),
// 	[ 'Cell Phones', 'Vacuum Cleaner', 'Computer' ]
// );
console.log(
	top3(
		[
			'Cell Phones',
			'Vacuum Cleaner',
			'Computer',
			'Printer',
			'TVs',
			'Laptops',
			'Tablets',
			'Chargers',
			'Speakers',
			'Games',
			'Music CDs',
			'Radios',
			'Drones',
			'Scooter',
			'Keyboards',
			'Mouses'
		],
		[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
		[ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20 ]
	),
	[ 'Cell Phones', 'Vacuum Cleaner', 'Computer' ]
);
// console.log(
// 	top3(
// 		[
// 			'Cell Phones',
// 			'Vacuum Cleaner',
// 			'Computer',
// 			'Autos',
// 			'Gold',
// 			'Fishing Rods',
// 			'Lego',
// 			' Speakers'
// 		],
// 		[ 0, 12, 24, 17, 19, 23, 120, 8 ],
// 		[ 9, 24, 29, 31, 51, 8, 120, 14 ]
// 	),
// 	[ 'Lego', 'Gold', 'Computer' ]
// );
