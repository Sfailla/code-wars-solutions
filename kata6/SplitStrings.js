function solution(str) {
	if (str.length % 2 === 0) {
		str = str.match(/(\S{1,2})/g);
		return str;
	} else {
		str = str.split('');
		str.push('_');
		str = str.join('');
		str = str.match(/(\S{1,2})/g);
		return str;
	}
}

function solution(str) {
	let string = str.length % 2 === 0 ? str : str + '_';
	return string.match(/\S{1,2}/g);
}

console.log(solution('abcdef'));
