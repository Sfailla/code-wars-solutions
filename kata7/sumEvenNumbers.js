function sumEvenNumbers(input) {
	return input.filter(num => num % 2 === 0).reduce((acc, cur) => acc + cur);
}

// console.log(sumEvenNumbers([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]), 30);
console.log(sumEvenNumbers([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11.5, 12.7 ]), 30);
