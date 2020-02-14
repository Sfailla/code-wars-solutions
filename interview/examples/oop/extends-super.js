class Person {
	static species() {
		return 'Homo Sapiens';
	}

	static speciesSentence() {
		return `Humans are classified as ${this.species()}`;
	}

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.hasJob = false;
	}

	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	setFirstName(firstName) {
		this.firstName = firstName;
	}

	setLastName(lastName) {
		this.lastName = lastName;
	}
}

// use extends to grab methods from another class;
class Worker extends Person {
	// here we use the constructor to set our new properties and methods
	constructor(firstName, lastName, job) {
		// here we call super to grab the same methods from Person class
		super(firstName, lastName);
		this.job = job;
		this.hasJob = true;
	}

	setJob(job) {
		this.job = job;
	}
}

const worker1 = new Worker('Steven', 'Failla', 'Software Developer');
worker1;
