function evenNumbers(array, number) {
	// good luck

	let newArray = [];

	array.map(int => {
		if (int % 2 === 0) {
			newArray.push(int);
			newArray = newArray.slice(-number);
		}
	});
	return newArray;
}

console.log(evenNumbers([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 3)); // [4, 6, 8]

/*

CHALLENGE

Given an array of digital numbers, return a new array of length number 
containing the last even numbers from the original array (in the same order). 
The original array will be not empty and will contain at least "number" even 
numbers.

BEST SOLUTION
*/

const evenNumbers = (array, number) => {
	return array.filter(item => item % 2 === 0).slice(-number);
};

/*

*/
