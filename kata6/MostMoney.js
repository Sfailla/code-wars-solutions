class Student {
	constructor(name, fives, tens, twenties) {
		this.name = name;
		this.fives = fives;
		this.tens = tens;
		this.twenties = twenties;
	}
}

const andy = new Student('Andy', 0, 0, 2);
const stephen = new Student('Stephen', 0, 4, 0);
const eric = new Student('Eric', 8, 1, 0);
const david = new Student('David', 2, 0, 1);
const phil = new Student('Phil', 0, 2, 1);
const cam = new Student('Cameron', 2, 2, 0);
const geoff = new Student('Geoff', 0, 3, 0);

function mostMoney(students) {
	// code here

	// let name = students[1].name;
	// let fives = students[0].fives
	// let tens = students[0].tens;
	// let twenties = students[0].twenties;

	if (students.length <= 1) return students[0].name;

	for (let i = 0; i < students.length; i++) {
		let element = students[i];
	}

	return students;
}

console.log(mostMoney([ andy, stephen, eric, david, phil ]), 'Eric');
console.log(
	mostMoney([ cam, geoff, andy, stephen, eric, david, phil ]),
	'Eric'
);

// "What happens if there is only one student?"
console.log(mostMoney([ andy ]), 'Andy');
console.log(mostMoney([ stephen ]), 'Stephen');

// "What happens if all students have the same amount of money?"
console.log(mostMoney([ cam, geoff ]), 'all');
console.log(mostMoney([ david, cam, geoff ]), 'all');
