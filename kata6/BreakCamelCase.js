// complete the function
function solution(string) {
	return string.match(/[A-Z]*[^A-Z]+/g).join(' ');
}

console.log(
	solution('camelCasing'),
	'camel Casing',
	'Unexpected result'
);
console.log(
	solution('camelCasingTest'),
	'camel Casing Test',
	'Unexpected result'
);
