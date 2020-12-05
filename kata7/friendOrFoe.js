function friend(friends) {
	return friends.reduce((accumulator, names) => {
		names.length === 4 ? accumulator.push(names) : names;
		return accumulator;
	}, []);
}

function friend(friends) {
	return friends.filter(friend => friend.length === 4);
}

console.log(friend([ 'Love', 'Your', 'Face', '1' ]), [ 'Love', 'Your', 'Face' ]);
console.log(friend([ 'Ryan', 'Kieran', 'Mark' ]), [ 'Ryan', 'Mark' ]);
console.log(friend([ 'Ryan', 'Jimmy', '123', '4', 'Cool Man' ]), [ 'Ryan' ]);
console.log(
	friend([ 'Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool' ]),
	[ 'Jimm', 'Cari', 'aret' ]
);
