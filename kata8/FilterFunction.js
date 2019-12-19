// make a filter function

// Array.prototype.filter = function(fn) {
// 	let filtered = [];
// 	let array = this;
// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];
// 		if (fn(element)) {
// 			filtered.push(element);
// 		}
// 	}
// 	return filtered;
// };

// USING REDUCE
Array.prototype.filter = function(fn) {
	let array = this;

	return array.reduce((acc, val) => {
		if (fn(val)) acc.push(val);
		return acc;
	}, []);
};

console.log([ 1, 2, 3, 4 ].filter(num => num > 3), [ 4 ]);
