function isItANum(str) {
	// your code here;

	let regex = /[0-9]/g;
	let filtered = str.match(regex);

	if (
		!str.match(regex) ||
		filtered.length !== 11 ||
		filtered[0] !== '0'
	) {
		return 'Not a phone number';
	} else {
		let answer = filtered.join('');
		return answer;
	}
}

console.log(
	isItANum('stop calling me no I have never been in an accident')
);
