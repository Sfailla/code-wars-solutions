function repeatStr(num, str) {
	return Array.from({ length: num }).fill(str).join('');
}

console.log(repeatStr(3, '*'), '***');
console.log(repeatStr(5, '#'), '#####');
console.log(repeatStr(2, 'ha '), 'ha ha ');
