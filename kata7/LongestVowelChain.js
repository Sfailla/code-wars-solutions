// SOLUTION WITH REGEX
function solve(s) {
	let splitVowels = s.split(/[^a, e, i, o, u]+/);
	let vowelChain = 0;

	splitVowels.filter(val => val).map(letters => {
		if (vowelChain < letters.length) {
			vowelChain = letters.length;
		}
	});

	return vowelChain;
}

// SOLUTION WITHOUT REGEX
function solve(s) {
	debugger;
	let count = 0;
	let vowelChain = 0;
	let vowels = [ 'a', 'e', 'i', 'o', 'u' ];

	for (let i = 0; i < s.length; i++) {
		if (vowels.includes(s[i]) && vowels.includes(s[i + 1])) {
			count++;
		} else {
			vowelChain < count ? (vowelChain = count) : (count = 1);
		}
	}

	return vowelChain;
}

// console.log(solve('codewarriors'), 2);
// console.log(solve('suoidea'), 3);
// console.log(solve('ultrarevolutionariees'), 3);
// console.log(solve('strengthlessnesses'), 1);
// console.log(solve('cuboideonavicuare'), 2);
// console.log(solve('chrononhotonthuooaos'), 5);
console.log(solve('iiihoovaeaaaoougjyaw'), 8);
