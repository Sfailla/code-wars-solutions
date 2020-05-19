function findIntersection(arr1) {
	const commonElements = [];
	const a1 = arr1[0].split(', ');
	const a2 = arr1[1].split(', ');

	a2.map(val => {
		if (a1.indexOf(val) !== -1) {
			commonElements.push(val);
		}
	});

	return commonElements.join(', ');
}

console.log(
	findIntersection([ '1, 3, 9, 10, 17, 18', '1, 4, 9, 10' ])
);
