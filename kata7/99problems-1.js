const last = xs => {
	/* Your code goes here ! */

	let answer;

	if (!xs.length) {
		return null;
	} else {
		xs.map(val => {
			console.log(typeof val);
			let last = val === xs.length;
			if (last) {
				answer = val;
			}
		});
		return answer;
	}
};

// last([ 1, 2, 3 ]);
console.log(last([ 1, 2, 3 ]));
// last([]);
// console.log(last([]));
