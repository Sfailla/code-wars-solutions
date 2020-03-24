// Three things happen when the new keyword is used;
// 1. brand new obj is created.
// 2. the new obj is prototype linked.
// 3. the constructed obj is set as this property for that fn call

function Car(make) {
	this.make = make;
	this.wheels = 1;
}

Car.prototype.color = 'black';
Car.prototype.wheels = 4;

console.log(Car.prototype);

const myCar = new Car('Ford');

console.log(myCar.wheels);
