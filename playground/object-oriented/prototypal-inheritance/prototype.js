// Objects are linked together thru their prototype chain

const obj = {
	firstName: 'Steve'
};

const protoObj = {
	lastName: 'Failla'
};

// certain properties are available to all objects due to
// the prototype chain.  ex... toString(), hasOwnProperty(), etc.

// lastName is not a property of obj. so we can create a prototype obj
// and link them here below
Object.setPrototypeOf(obj, protoObj);

// now the lastName prop will be applied once it is found on the prototype chani
console.log(obj.lastName);
