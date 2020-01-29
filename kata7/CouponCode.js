function checkCoupon(
	enteredCode,
	correctCode,
	currentDate,
	expirationDate
) {
	let date = new Date(currentDate);
	let exp = new Date(expirationDate);

	if (enteredCode === correctCode && date <= exp) {
		return true;
	} else {
		return false;
	}
}

console.log(
	checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'),
	true
);
console.log(
	checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'),
	false
);
