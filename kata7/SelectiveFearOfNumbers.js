const AmIAfraid = function(day, num) {
	// Help me...
	const scaryDaysAndNums = {
		Monday: num === 12,
		Tuesday: num > 95,
		Wednesday: num === 34,
		Thursday: num === 0,
		Friday: num % 2 === 0,
		Saturday: num === 56,
		Sunday: num === 666 || num === -666
	};

	return scaryDaysAndNums[day];
};

console.log(AmIAfraid('Monday', 13), false, 'Should return false');
console.log(AmIAfraid('Sunday', -666), true, 'Should return true');
console.log(AmIAfraid('Tuesday', 2), false, 'Should return false');
console.log(AmIAfraid('Tuesday', 965), true, 'Should return true');
console.log(AmIAfraid('Friday', 2), true, 'Should return true');
