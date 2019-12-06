/* 
So the purpose of this kata is to create an object with accessible and "updatable"
(can i say that?) properties.

If .firstName or .lastName are changed, then .fullName should also be changed
If .fullName is changed, then .firstName and .lastName should also be changed.
*/

function NamedOne(first, last) {
	this.firstName = first;
	this.lastName = last;
	Object.defineProperty(this, 'fullName', {
		get: function() {
			return `${this.firstName} ${this.lastName}`;
		},
		set: function(name) {
			name = name.split(' ');
			if (name.length != 2)
				throw new Error('I cannot parse that name');
			this.firstName = name[0];
			this.lastName = name[1];
		}
	});
}

let n = new NamedOne('John', 'Doe');
console.log(n); // John Doe
n.firstName = 'Joey'; // new firstName prop === Joey
n.lastName = 'Diaz'; // new lastName prop === Diaz
console.log(n); // Joey Diaz

console.log(n.firstName); // Joey
console.log(n.lastName); // Diaz
console.log(n.fullName); // Joey Diaz
