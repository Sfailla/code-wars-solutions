function growingPlant(upSpeed, downSpeed, desiredHeight) {
	// set 2 vars to keep track of the totalHeight and the number of days
	let days = 0;
	let total = 0;

	while (total < desiredHeight) {
		// while the total < desiredHeight we add the total to the upSpeed
		total += upSpeed;
		// if total < desiredHeight we add another day and repeat process
		days++;
		// when total is equal or above desiredHeight we return the day counter
		if (total >= desiredHeight) {
			return days;
		}
		// else we subtract the downspeed from total and start another loop
		total -= downSpeed;
	}
	// finally return the answer
	return days;
}

console.log(growingPlant(46, 45, 165)); // should return 120
