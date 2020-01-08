function mostFrequentItemCount(collection) {
	// Do your magic. :)
	const reduced = collection.reduce((acc, arr) => {
		acc[arr] = acc[arr] || 0;
		acc[arr]++;
		return acc;
	}, {});

	let lastItem = 0;

	for (const key of Object.keys(reduced)) {
		if (lastItem < reduced[key]) {
			lastItem = reduced[key];
		}
	}

	return lastItem;
}

console.log(mostFrequentItemCount([ 3, -1, -1 ]), 2);
console.log(
	mostFrequentItemCount(
    [	3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3 ]
  ),
	5
);
