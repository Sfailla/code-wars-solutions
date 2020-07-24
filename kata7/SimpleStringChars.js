// order is Uppercase, Lowercase, numbers, special chars
function solve(s) {
	let upper = 0,
		lower = 0,
		nums = 0,
		spec = 0;

	[ ...s ].map(char => {
		if (char.match(/[A-Z]/g)) {
			upper++;
		}
		if (char.match(/[a-z]/g)) {
			lower++;
		}
		if (char.match(/[0-9]/g)) {
			nums++;
		}
		if (char.match(/[\W]+/g)) {
			spec++;
		}
	});

	return [ upper, lower, nums, spec ];
}

console.log(solve('Codewars@codewars123.com'), [ 1, 18, 3, 2 ]);
console.log(solve('bgA5<1d-tOwUZTS8yQ'), [ 7, 6, 3, 2 ]);
console.log(solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H'), [
	9,
	9,
	6,
	9
]);
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [
	15,
	8,
	6,
	9
]);
console.log(solve('$Cnl)Sr<7bBW-&qLHI!mY41ODe'), [ 10, 7, 3, 6 ]);
console.log(solve('@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft'), [
	7,
	13,
	4,
	10
]);
