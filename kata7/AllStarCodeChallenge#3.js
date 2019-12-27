var removeVowels = function(str) {
	//code here
	return [ ...str ]
		.filter(letter => !'aeiou'.includes(letter))
		.join('');
};

console.log(removeVowels('drake'), 'drk');
console.log(removeVowels('aeiou'), '');
