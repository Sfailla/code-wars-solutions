function insurance(age, size, numOfDays) {
	if (numOfDays <= 0) return 0;
	let totalCost = 0;
	const totalCostAge = age < 25 ? 10 * numOfDays : 0;
	const totalCostDays = numOfDays * 50;
	const totalCostSize = {
		medium: 10 * numOfDays,
		'full-size': 15 * numOfDays,
		economy: 0
	};

	const calculatedSize = totalCostSize.hasOwnProperty(size)
		? (size = totalCostSize[size])
		: (size = 15 * numOfDays);

	totalCost = totalCostAge + totalCostDays + calculatedSize;

	return totalCost;
}

console.log(insurance(18, 'medium', 7), 490);
console.log(insurance(30, 'full-size', 30), 1950);

console.log(insurance(21, 'economy', -10), 0);
console.log(insurance(42, 'my custom car', 7), 455);
