function growingPlant(upSpeed, downSpeed, desiredHeight) {
	//coding and coding..
	let days = 0;
	let total = 0;
	let formula = desiredHeight / (upSpeed - downSpeed);

	return formula.toFixed(0);
}

console.log(growingPlant(100, 10, 910)); // should return 10
