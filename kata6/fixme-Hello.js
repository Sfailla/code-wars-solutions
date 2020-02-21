class Dinglemouse {
	constructor() {
		this.name = this.age = this.sex = 0;
	}

	setAge(age) {
		this.age = age;
		return this;
	}

	setSex(sex) {
		this.sex = sex;
		return this;
	}

	setName(name) {
		this.name = name;
		return this;
	}

	hello() {
		return `Hello. My name is ${this.name}. I am ${this
			.age}. I am ${this.sex == 'M' ? 'male' : 'female'}.`;
	}
}

let dm = new Dinglemouse().setName('Bob');
// .setAge(27).setSex('M');

dm.hello();
// let expected = "Hello. My name is Bob. I am 27. I am male."

// let dm = new Dinglemouse().setAge(27).setSex('M').setName("Bob")
// let expected = "Hello. I am 27. I am male. My name is Bob."

// let dm = new Dinglemouse().setName("Alice").setSex('F')
// let expected = "Hello. My name is Alice. I am female."

// let dm = new Dinglemouse().setName("Batman")
// let expected = "Hello. My name is Batman."
