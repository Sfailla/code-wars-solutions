function interpolate(points) {
	// Your code here
	let map = [];

	function helpInterpolate(array) {
		let a, b, c;
		let reduced = array.reduce((acc, val, i, arr) => {
			a = arr[i];
			b = arr[i + 1];
			if (a < arr.length) {
				c = b - a;
				acc.push(c);
			}
			return acc;
		}, []);
		return reduced;
	}

	function interpolateMap(array) {
		let result = [];

		array.map((val, i) => {
			console.log(helpInterpolate(array));
		});
	}

	interpolateMap(points);

	let res = helpInterpolate(points);
	let res2 = helpInterpolate(res);
	let res3 = helpInterpolate(res2);

	let mapp = [ points, res, res2, res3 ];
	console.log(mapp);

	return points;
}

console.log(interpolate([ 0, 1, 3, 7 ])); // [ 1, 1, 1, 0 ]
