function add(x, y) {
	function flatten(arr) {
		let flattened = [];
		for (let i = 0; i < arr.length; i++) {
			const el = arr[i];
			let current = el;
			for (let j = 0; j < current.length; j++) {
				const cur = current[j];
				flattened.push(cur);
			}
		}
		return flattened;
	}

	function fillArray(arr1, arr2) {
		const array1 = Array(arr1).fill(arr1);
		const array2 = Array(arr2).fill(arr2);

		let array = [ array1, array2 ];
		return array;
	}

	let res;

	if (x >= 0 && y >= 0) {
		res = fillArray(x, y);
		const flat = flatten(res);
		return flat.length;
	} else if (x < 0 && y < 0) {
		const posX = x * -1;
		const posY = y * -1;

		res = fillArray(posX, posY);
		const flat = flatten(res);
		const convertBackToNeg = flat.length * -1;
		return convertBackToNeg;
	} else if (x < 0 && y >= 0) {
		const posX = x * -1;
		const arr1 = Array(posX).fill(posX);
		const s = arr1.slice(y);
		const convertToNeg = s.length * -1;
		return convertToNeg;
	}
}

function add(x, y) {
	if (x >= 0 && y >= 0) {
		let arr1 = Array(x).fill(x);
		let arr2 = Array(y).fill(y);
		let array = arr1.concat(arr2);
		return array.length;
	} else if (x < 0 && y < 0) {
		let posX = Number(x.toString().split('').slice(1).join(''));
		let posY = Number(y.toString().split('').slice(1).join(''));
		let dash = y.toString().split('')[0];
		let arr1 = Array(posX).fill(posX);
		let arr2 = Array(posY).fill(posY);
		let array = arr1.concat(arr2);
		return Number([ dash, array.length ].join(''));
	} else if (x < 0 && y >= 0) {
		let posX = Number(x.toString().split('').slice(1).join(''));
		let dash = x.toString().split('')[0];
		let arr1 = Array(posX).fill(posX);
		let sliced = arr1.slice(y).length;
		return Number([ dash, sliced ].join(''));
	}
}

function add(x, y) {
	const getSum = (a, b) => (b ? getSum(a ^ b, (a & b) << 1) : a);
	const total = getSum(x, y);
	return total;
}

console.log(add(-90, 30), -60);
