function partsSums(ls) {
	// do something
	let obj = {};
	let arr = [];
	let total;

	ls.map((val, i) => {
		obj[i + 1] = ls.slice(i);
		return val;
	});

	Object.keys(obj).map(key => {
		total = obj[key].reduce((acc, val) => {
			return acc + val;
		}, 0);

		arr.push(total);
	});

	const lastVal = [ 0 ];
	const answer = arr.concat(lastVal);

	return answer;
}

console.log(partsSums([ 1, 2, 3, 4, 5, 6 ])); // [20, 20, 19, 16, 10, 0]
