// REVERSE A STRING
// return a string using a library and without use of library

// string reversal with library;
const reverse = str => {
	return [ ...str ].reverse().join('');
};

reverse('hello');
console.log(reverse('hello'));

// string reversal without library
const reverse = str => {
	let newString = '';

	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}

	return newString;
};

reverse('hello');
console.log(reverse('hello'));

function reverseString(s) {
	let string = '';

	for (let i = s.length - 1; i > 0; i--) {
		string += s[i];
	}
	return string;
}

s('hello');
console.log(s('hello'));
