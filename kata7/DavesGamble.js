function horses(n) {
	let num = n;
	let answer = 1;

	if (num < 3) return num;

	for (let i = num; i > 0; i--) {
		answer *= i;
	}
	console.log(answer / 3);
}

console.log(horses(12), 1320, true);
console.log(horses(15), 2730, true);
console.log(horses(2), 0, true);
console.log(horses(11), 5, true);
console.log(horses(2.5), undefined, false);
console.log(horses('a'), 5, true);
