Array.prototype.groupBy = function(fn) {
	function arrayGroup(key, val) {
		let count = 0;
		const total = 1;
		const array = [];

		while (val > count) {
			array.push(total * key);
			count++;
		}

		return array;
	}

	function formatGroup(arr, key) {
		const result = [];

		for (let i = 0; i < arr.length; i++) {
			const el = arr[i];

			if (fn(el) === key) {
				result.push(el);
			}
		}

		return result;
	}

	if (!fn) {
		const array = this;

		const reduced = array.reduce((acc, arr, index) => {
			acc[arr] = acc[arr] || 0;
			acc[arr]++;
			return acc;
		}, {});

		for (let [ key, val ] of Object.entries(reduced)) {
			reduced[key] = arrayGroup(key, val);
		}

		return reduced;
	} else {
		const array = this;

		const reduced = this.reduce((acc, arr, index) => {
			acc[index] = formatGroup(array, index);
			if (!acc[index].length) {
				delete acc[index];
			}
			return acc;
		}, {});

		return reduced;
	}
};

// refactored version of above (better performance)
Array.prototype.groupBy = function(fn) {
	return this.reduce((obj, item) => {
		if (!fn) {
			let val = (obj[item] = obj[item] || []);
			val.push(item);
			return obj;
		} else {
			(obj[fn(item)] = obj[fn(item)] || []).push(item);
			return obj;
		}
	}, {});
};

console.log(
	JSON.stringify([ 1, 2, 3, 2, 4, 1, 5, 1, 6 ].groupBy()),
	'{"1":[1,1,1],"2":[2,2],"3":[3],"4":[4],"5":[5],"6":[6]}'
);

console.log(
	JSON.stringify(
		[ 1, 2, 3, 2, 4, 1, 5, 1, 6 ].groupBy(function(item) {
			return item % 3;
		})
	),
	'{"0":[3,6],"1":[1,4,1,1],"2":[2,2,5]}'
);

var words = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten'
];
console.log(
	JSON.stringify(
		words.groupBy(function(item) {
			return item.length;
		})
	),
	'{"3":["one","two","six","ten"],"4":["four","five","nine"],"5":["three","seven","eight"]}'
);
