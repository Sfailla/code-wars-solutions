const obj = {
	firstName: 'Steve',
	lastName: 'Failla'
};

const protoObj = {
	hair: 'brown'
};

const extendedObj = Object.setPrototypeOf(obj, protoObj);

// now that prototype is set we can access the property like so
console.log(obj.hair);
console.log(extendedObj.hair);

let n = 0;

for (let property in obj) {
	if (obj.hasOwnProperty(property)) {
		n++;
	}
}

console.log(n);
