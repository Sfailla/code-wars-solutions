/*
Return the number (count) of vowels in the given string

We will consider a, e, i, o, and u as vowels for this Kata

The input string will only consist of lower case letters and/or spaces
*/

const getCount = str => {
	let vowels = 'aeiou';
	var vowelsCount = 0;

	for (let i = 0; i < str.length; i++) {
		let mappedVowel = [ ...vowels ].map(v => {
			if (str[i] === v) {
				vowelsCount++;
			}
		});
	}
	return vowelsCount;
};

getCount('abracadabra'); //  5
