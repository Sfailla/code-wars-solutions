function lottery(str) {
	//your code is here...
	return [ ...new Set(str.match(/[0-9]/g)) ].length > 0
		? [ ...new Set(str.match(/[0-9]/g)) ].join('')
		: 'One more run!';
}

console.log(
	lottery('wQ8Hy0y5m5oshQPeRCkG'),
	'805',
	'should return unique integer(s) or a string'
);
console.log(
	lottery('ffaQtaRFKeGIIBIcSJtg'),
	'One more run!',
	'should return unique integer(s) or a string'
);
