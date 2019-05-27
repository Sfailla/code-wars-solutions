function solve(s) {
	let letterArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let constStringsArr = s.split(/[aeiou]+/gi);

	console.log(constStringsArr.filter(Boolean));
}

solve('zodiacs'); // === 26
// solve('chruschtschov'); // === 80
