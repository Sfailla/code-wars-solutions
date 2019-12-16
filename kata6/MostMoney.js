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
	function name(person) {
		return person.name;
	}

	function fives(person) {
		return person.fives * 5;
	}

	function tens(person) {
		return person.tens * 10;
	}

	function twenties(person) {
		return person.twenties * 20;
	}

	if (students.length <= 1) return name(students[0]);

	const studentName = [];

	for (let i = 0; i < students.length; i++) {
		let element = students[i];

		const group = {
			name: name(element),
			fives: fives(element),
			tens: tens(element),
			twenties: twenties(element)
		};

		studentName.push(group);
	}

	const total = [];

	function getTotal() {
		studentName.map(val => {
			const obj = {
				name: val.name,
				total: val.fives + val.tens + val.twenties
			};

			total.push(obj);
		});
		return total;
	}

	const totals = getTotal();
	totals;

	const reduced = totals.reduce((acc, val) => {
		acc[val.name] = val.total;
		return acc;
	}, {});

	const arr = [];
	const maxTotal = [];

	for (const [ key, val ] of Object.entries(reduced)) {
		arr.push(val);
	}

	const sort = arr.sort((a, b) => b - a);
	sort;
	const max = sort[0];

	for (const [ key, val ] of Object.entries(reduced)) {
		key;
		val;

		if (val == max) {
			maxTotal.push(key);
		}
	}

	let answer = maxTotal;

	if (answer.length > 1) {
		answer = 'all';
	} else {
		answer = answer.join('');
	}
	answer;
	return answer;
}

console.log(mostMoney([ andy, stephen, eric, david, phil ]), 'Eric');
console.log(
	mostMoney([ cam, geoff, andy, stephen, eric, david, phil ]),
	'Eric'
);

// "What happens if there is only one student?"
console.log(mostMoney([ andy ]), 'Andy');
console.log(mostMoney([ stephen ]), 'Stephen');

('What happens if all students have the same amount of money?');
console.log(mostMoney([ cam, geoff ]), 'all');
console.log(mostMoney([ david, cam, geoff ]), 'all');
