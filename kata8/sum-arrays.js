/*
Sum Array
Write a method sum (sum_array in python, SumArray in C#) that takes an array
of numbers and returns the sum of the numbers. These may be integers or decimals
for Ruby and any instance of Num for Haskell. The numbers can also be negative. 
If the array does not contain any numbers then you should return 0.

Examples
numbers = [1, 5.2, 4, 0, -1]
puts sum(numbers)
9.2
Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.

*/

let sum = number => {
	'use strict';

	let answer = 0;

	for (let i = 0; i < number.length; i++) {
		if (typeof number[i] !== 'number') {
			return answer;
		} else {
			answer = answer += number[i];
		}
	}
	return answer;
};

sum([]);
sum([ 1, 5.2, 4, 0, -1 ]);
