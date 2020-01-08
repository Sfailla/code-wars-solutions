function breakChocolate(n, m) {
	// function that multiplies the inputs and subtracts 1
	let formula = (a, b) => a * b - 1;
	// placeholder for answer
	let answer = formula(n, m);
	// if answer is less than 0 return 0 else return answer;
	return answer < 0 ? 0 : answer;
}

console.log(breakChocolate(5, 5), 24);
console.log(breakChocolate(1, 1), 0);
