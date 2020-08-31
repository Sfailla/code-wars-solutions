function wordPattern(word) {
	let count = 0;
	let obj = {};
	word = [ ...word.toLowerCase() ];

	return word.reduce((array, letter) => {
    let res = obj[letter] === undefined ?
      (obj[letter] = count++) : obj[letter];

    array.push(res);
    return array;
  }, []).join('.');
}

// very nice short answer from codewars
function wordPattern(word) {
  let pos = 0;
  let lookup = {};
  debugger;
  return [ ...word.toLowerCase() ]
    .map(char => char in lookup ? lookup[char] : lookup[char] = pos++)
    .join('.');
}

console.log(wordPattern('hello'), '0.1.2.2.3');
console.log(wordPattern('heLlo'), '0.1.2.2.3');
console.log(wordPattern('runner'), '0.1.2.2.3.0');
console.log(
	wordPattern('Hippopotomonstrosesquippedaliophobia'),
	'0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.' +
		'11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13'
);
