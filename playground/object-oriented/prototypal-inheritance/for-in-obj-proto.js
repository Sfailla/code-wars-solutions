const obj = {
	firstName: 'Steve',
	lastName: 'Failla'
};

const protoObj = {
	hair: 'brown'
};

Object.setPrototypeOf(obj, protoObj);

let n = 0;

for (let property in obj) {
	if (obj.hasOwnProperty(property)) {
		n++;
	}
}

console.log(n);
