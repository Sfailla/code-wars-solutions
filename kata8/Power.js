function numberToPower(number, power) {
	let result = 1;

	for (let i = 0; i < power; i++) {
		const element = power[i];

		result *= number;
	}

	return result;
}

console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);
