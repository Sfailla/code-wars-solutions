function interpolate(points) {
	// Your code here

	let a, b, c;

	function reduceArray(array) {
		let arr = [];
		array.map((val, i) => {
			a = points[i];
			b = points[i + 1];
			if (a < points.length) {
				c = b - a;
				arr.push(c);
			}
		});
		return arr;
	}

	let res = reduceArray(points);
	let res2 = reduceArray(res);
	console.log(res2);

	return points;
}

console.log(interpolate([ 0, 1, 3, 7 ])); // [ 1, 1, 1, 0 ]
