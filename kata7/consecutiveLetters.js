/*

In this Kata, we will check if a string contains consecutive letters as they 
appear in the English alphabet and if each letter occurs only once.

for example:
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True

*/

const solve = s => {
	// solve

	let array = [];
	let charArr = [];
	let charCodeArr = [];
	let charToCode;
	let sorted = [ ...s ].sort();
	// first sort the array and check if any duplicates
	sorted.map((letter, idx) => {
		// if sorted array has duplicate we push that duplicate to array
		if (sorted.indexOf(letter) !== idx) {
			array.push(letter);
		}
	});
	// if the array has length there is a duplicate and we return false
	if (array.length) {
		return false;
	}
	// otherwise we loop thru sorted array and turn char to char code values.
	sorted.map((letter, idx) => {
		charToCode = sorted.join('').charCodeAt(idx);
		charArr.push(charToCode);
	});
	// grab the lowest number and highest number in array range
	let max = Math.max(...charArr);
	let min = Math.min(...charArr);
	// loop thru array and push the range of ascii numbers to an array
	for (let i = min; i <= max; i++) {
		charCodeArr.push(i);
	}
	// if the array range is equal to sorted array we can return true.  they match!!
	if (charArr.join('') === charCodeArr.join('')) {
		return true;
	}
	// else we can return false
	return false;
};

console.log(solve('acadb')); // false a repeats itself
