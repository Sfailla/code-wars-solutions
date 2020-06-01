function map(head, f) {
	return {
		f,
		...head
	};
}

function listToArray(head) {
	return !head ? [] : [ head.data ].concat(listToArray(head.next));
}

function testMap(head, f, expected) {
	console.log(listToArray(map(head, f)), listToArray(expected));
}

function Node(data, next = null) {
	this.data = data;
	this.next = next;
}

// testMap(null, x => false, null);
testMap(
	new Node(1, new Node(2, new Node(3))),
	x => x * 2,
	new Node(2, new Node(4, new Node(6)))
);
