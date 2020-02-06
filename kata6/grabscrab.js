function grabscrab(anagram, dictionary) {
	return dictionary.filter(
		x =>
			x.split('').sort().join('') ===
			anagram.split('').sort().join('')
	);
}

console.log(
	grabscrab('trisf', [ 'first' ]),
	[ 'first' ],
	"Should have found 'first'"
);
console.log(
	grabscrab('oob', [ 'bob', 'baobab' ]),
	[],
	'Should not have found anything'
);
console.log(
	grabscrab('ainstuomn', [ 'mountains', 'hills', 'mesa' ]),
	[ 'mountains' ],
	"Should have found 'mountains'"
);
console.log(
	grabscrab('oolp', [ 'donkey', 'pool', 'horse', 'loop' ]),
	[ 'pool', 'loop' ],
	"Should have found 'pool' and 'loop'"
);
console.log(
	grabscrab('ortsp', [ 'sport', 'parrot', 'ports', 'matey' ]),
	[ 'sport', 'ports' ],
	"Should have found 'sport' and 'ports'"
);
console.log(
	grabscrab('ourf', [ 'one', 'two', 'three' ]),
	[],
	'Should not have found anything'
);
