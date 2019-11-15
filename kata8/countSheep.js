console.log('count sheep');

function countSheeps(arr) {
	let newArr = [];
	arr.filter(val => {
		if (val) {
			newArr.push(val);
		}
	});
	let result = newArr.length;

	return result;
}

const sheep = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true
];

countSheeps(sheep);
