function unluckyDays(year) {
	//your code here

	let count = 0;

	for (let i = 0; i < 12; i++) {
		if (new Date(year, i, 13).getDay() === 5) {
			count++;
		}
	}
	return count;
}

unluckyDays(1001);
