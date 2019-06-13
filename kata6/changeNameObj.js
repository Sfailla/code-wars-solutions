class NamedOne {
	constructor(first, last) {
		this.firstName = first;
		this.lastName = last;
		this.fullName = `${this.firstName} ${this.lastName}`;
	}
}

let n = new NamedOne('John', 'Doe');
console.log(n.fullName);
