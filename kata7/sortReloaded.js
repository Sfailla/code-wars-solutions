Array.prototype.sortReloaded = function(dir = 'asc') {
	let arr = this;
	let sorted;

	if (dir !== 'asc' && dir !== 'desc') return false;
	if (dir === 'asc') {
		sorted = arr.slice(0).sort((a, b) => {
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		});
	} else if (dir === 'desc') {
		sorted = arr.slice(0).sort((a, b) => {
			if (a > b) return -1;
			if (a < b) return 1;
			return 0;
		});
	}

	return sorted;
};

console.log(
	typeof Array.prototype.sortReloaded,
	'function',
	'The object Array has no method sortReloaded()'
);
console.log(
	[ 3, 1, 5, 3, 6, 1, 2 ].sortReloaded('asc'),
	[ 1, 1, 2, 3, 3, 5, 6 ],
	'Expected 1,1,2,3,3,5,6 instead got ' +
		[ 3, 1, 5, 3, 6, 1, 2 ].sortReloaded('asc')
);
console.log(
	[ 2, 3, 4, 3, 2, 9, 1 ].sortReloaded('desc'),
	[ 9, 4, 3, 3, 2, 2, 1 ],
	'Expected 9,4,3,3,2,2,1 instead got ' +
		[ 2, 3, 4, 3, 2, 9, 1 ].sortReloaded('desc').sortReloaded('asc')
);
console.log(
	[ 2, 3 ].sortReloaded('foo'),
	false,
	'It should return false if dir in invalid'
);
console.log(
	[ 4, 7, 2 ].sortReloaded(),
	[ 2, 4, 7 ],
	'It should set dir to asc by default'
);
