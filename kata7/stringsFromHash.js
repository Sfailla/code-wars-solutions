function solution(pairs) {
	let string = [];

	for (let [ key, val ] of Object.entries(pairs)) {
		key;
		val;
		string.push(`${key} = ${val}`);
	}

	return string.join(', ');
}

function solution(pairs) {
	return Object.entries(pairs)
		.map(([ key, val ]) => `${key} = ${val}`)
		.join(',');
}

console.log(solution({ a: 1, b: '2' }), 'a = 1, b = 2');
