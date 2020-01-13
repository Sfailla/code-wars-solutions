function toTime(seconds) {
	//code here

	let secondsToHours = sec => {
		let formula = sec / 60 / 60;

		let hours = Math.floor(formula);

		let min = formula % 1;

		let minutes = Math.floor(min * 60);

		return `${hours} hour(s) and ${minutes} minute(s)`;
	};

	const total = secondsToHours(seconds);

	return total;
}

console.log(toTime(3600), '1 hour(s) and 0 minute(s)');
console.log(toTime(3601), '1 hour(s) and 0 minute(s)');
console.log(toTime(3500), '0 hour(s) and 58 minute(s)');
console.log(toTime(0), '0 hour(s) and 0 minute(s)');
console.log(toTime(323500), '89 hour(s) and 51 minute(s)');
