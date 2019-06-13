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
	let sorted = [ ...s ].sort();

	sorted.filter((letter, idx) => {
		// console.log(idx, letter);
		console.log(answer);
		return answer;
	});
};

solve('acdba');
console.log(solve('acdba'));
