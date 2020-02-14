// ES5 Function Constructor
function Person(name) {
	this.name = name;
}

// ES6 Class
class Person {
	constructor(name) {
		this.name = name;
	}
}

/* 
  For simple constructors, they look pretty similar.
  The main difference in the constructor comes when using inheritance. 
  If we want to create a Student class that subclasses Person and add a 
  studentId field, this is what we have to do in addition to the above.
*/

// ES5 Function Constructor
function Student(name, studentId) {
	// Call constructor of superclass to initialize superclass-derived members.
	Person.call(this, name);
	// Initialize subclass's own members.
	this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// ES6 Class
class Student extends Person {
	constructor(name, studentId) {
		super(name);
		this.studentId = studentId;
	}
}

// It's much more verbose to use inheritance in ES5 and the ES6 version is easier
// to understand and remember.
