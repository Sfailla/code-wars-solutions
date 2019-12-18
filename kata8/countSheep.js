console.log('count sheep');

function countSheeps(arr) {
	return arr.filter(val => val).length;
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

console.log(countSheeps(sheep), 17);
