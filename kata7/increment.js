const incrementer = nums => {
	if (nums === '') return [];

	let mapped = nums.map((num, index) => {
		let amount = index + 1;
		let total = num + amount;

		if (total > 9) {
			let digit = ('' + total)[1];
			total = parseInt(digit);
		}

		return total;
	});
	console.log(mapped);
	return mapped;
};

incrementer([ 4, 6, 7, 1, 3 ]); //  [5, 8, 0, 5, 8]
