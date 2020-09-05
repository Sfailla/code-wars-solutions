/** 
 * 
 * @description Big O notation
 *
 * this is used to evaluate how performant an operation, program, or 
 * algorithm is.
 * 
 * the most common that you will find are:
 * 
 * 1. LINEAR TIME    == O(n)
 * 2. CONSTANT TIME  == O(1)
 * 3. QUADRATIC TIME == O(n^2) 
 * 4. CUBIC TIME     == O(n^3)
 * 
 * 
 */

// Example

// FACTORIAL EQUATION O(1)
// O(1) because the bigger the number is the more time it will take

function sumUp(number) {
	let result = 0;
	for (let i = 1; i <= number; i++) {
		result += i;
	}
	return result;
}

sumUp(10); // 55

// Same example but more performant
// this uses O(n) linear because it takes the same amount of time
// no matter the size of the numner or operation

function sumUp(number) {
	return number / 2 * (1 + number);
}

sumUp(10); // 55
