function greet(myName, yourName) {
	return 'Hello ' + yourName + ', my name is ' + myName;
}

class Person {
	constructor(name) {
		this.name = name;
	}

	greet(name) {
		return `Hello ${name}, my name is ${this.name}`;
	}
}

var joe = new Person('Joe');
console.log(joe.greet('Kate'), 'Hello Kate, my name is Joe');
console.log(joe.name, 'Joe'); // should == 'Joe'
