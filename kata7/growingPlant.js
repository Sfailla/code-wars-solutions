function growingPlant(upSpeed, downSpeed, desiredHeight) {
	//coding and coding..
	// let formula;
	// upSpeed >= desiredHeight
	// 	? (formula = 1)
	// 	: (formula = desiredHeight / (upSpeed - downSpeed));

	// let answer = parseInt(formula.toFixed(0));

	let days = 0;
	let total = 0;
	let answer;

	while (total < desiredHeight) {
		if (total + upSpeed === desiredHeight) {
			return total;
		} else if (days === 40) {
			break;
		}
		days++;
		answer = total + (upSpeed - downSpeed);
	}
	console.log(answer);

	return answer;
}

console.log(growingPlant(46, 45, 165)); // should return 120
