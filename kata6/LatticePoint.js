function interpolate(points) {
	// Your code here
	let map = [];
	let results = [];
	let answer = [];

	function helpInterpolate(array) {
		let a, b, c;
		map.push(array);
		let reduced = array.reduce((acc, val, i, arr) => {
			a = arr[i];
			b = arr[i + 1];
			if (a < arr.length) {
				c = b - a;
				console.log(c);
				acc.push(c);
			}
			return acc;
		}, []);

		if (reduced.length) {
			helpInterpolate(reduced);
		} else {
			results = map;
			console.log(map);
			return map;
		}

		return reduced;
	}
	helpInterpolate(points);

	results.reverse().map(val => {
		answer.push(val[0]);
	});

	return answer;
}

console.log(interpolate([ 0, 2, 0 ])); // [ 1, 1, 1, 0 ]
