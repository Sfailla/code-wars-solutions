function remove(s, n) {
	for (let i = 1; i <= n; i++) {
		s = s.replace('!', '');
	}
	return s;
}

function remove(s, n) {
	var arr = s.split(''),
		counter = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === '!') {
			counter++;
			if (arr[i] === '!' && counter <= n) {
				arr.splice(i, 1);
				i--;
			}
		}
	}
	return arr.join('');
}

console.log(remove('Hi!', 1), 'Hi');
console.log(remove('Hi!', 100), 'Hi');
console.log(remove('Hi!!!', 1), 'Hi!!');
console.log(remove('Hi!!!', 100), 'Hi');
console.log(remove('!Hi', 1), 'Hi');
console.log(remove('!Hi!', 1), 'Hi!');
console.log(remove('!Hi!', 100), 'Hi');
console.log(remove('!!!Hi !!hi!!! !hi', 1), '!!Hi !!hi!!! !hi');
console.log(remove('!!!Hi !!hi!!! !hi', 3), 'Hi !!hi!!! !hi');
console.log(remove('!!!Hi !!hi!!! !hi', 5), 'Hi hi!!! !hi');
console.log(remove('!!!Hi !!hi!!! !hi', 100), 'Hi hi hi');
