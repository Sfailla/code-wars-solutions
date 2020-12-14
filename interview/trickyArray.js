const arr1 = [
	[ 'name', 'id', 'age', 'weight' ],
	[ 'Susan', '3', '10', '120' ],
	[ 'John', '1', '11', '150' ],
	[ 'Bob', '2', '23', '90' ],
	[ 'Ben', '4', '20', '100' ]
];

const arr2 = [
	[ 'name', 'id', 'height' ],
	[ 'Bob', '2', '50' ],
	[ 'John', '1', '45' ],
	[ 'Ben', '4', '43' ],
	[ 'Susan', '5', '48' ]
];

const arr3 = [
	[ 'name', 'id', 'parent' ],
	[ 'Bob', '2', 'yes' ],
	[ 'John', '1', 'yes' ]
];

function parseArray(arr) {
	const [ headings, ...data ] = arr;

	return data.reduce((acc, data, i) => {
		const person = {};

		for (const [ index, heading ] of headings.entries()) {
			person[heading] = data[index];
		}

		return [ ...acc, person ];
	}, []);
}

console.table(parseArray(arr1));
