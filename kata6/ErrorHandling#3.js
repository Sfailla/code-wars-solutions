let ERRORS = {
	usernameTooShort: () => {},
	usernameTooLong: () => {},
	usernameInvalidCharacters: () => {},
	passwordTooShort: () => {},
	passwordTooLong: () => {},
	passwordNoCapital: () => {},
	passwordInvalidCharacters: () => {},
	passwordContainsUsername: () => {}
};

function validate(username, password) {
	function validate(username, password) {
		username = username.trim();
		password = password.trim();

		let capitalRegex = /[A-Z]/g;
		let lowerCaseRegex = /[a-z]/g;
		let numbersRegex = /[0-9]/g;

		let invalidUsername = /([\W])/g;
		let invalidPassword = /([;:?.,<>~*^%$ @!+])/g;

		if (username.length > 12) throw ERRORS.usernameTooLong(username);
		if (username.length < 1) throw ERRORS.usernameTooShort(username);
		if (username.match(invalidUsername))
			throw ERRORS.usernameInvalidCharacters(username);

		if (password.length < 8) throw ERRORS.passwordTooShort(password);
		if (password.length > 24) throw ERRORS.passwordTooLong(password);
		if (password.match(username)) throw ERRORS.passwordContainsUsername(password);
		if (password.match(invalidPassword))
			throw ERRORS.passwordInvalidCharacters(password);
		if (!password.match(capitalRegex)) throw ERRORS.passwordNoCapital(password);
		if (!password.match(numbersRegex)) throw ERRORS.passwordNoNumber(password);

		return true; //if no errors are thrown return true :)
	}
}

console.log(
	validate('timmy', 'Password1'),
	true,
	'username and password should both be valid'
);
console.log(
	validate('a                    ', 'bbbbbbB1'),
	true,
	'username and password should both be valid'
);
console.log(
	validate('123456789asb', '1234567B'),
	true,
	'username and password should both be valid'
);
console.log(
	validate('john', 'joHnJohn2'),
	true,
	'username and password should both be valid'
);
console.log(
	validate('Alex', 'Aaa2aaaaaaaaaaaaaaaaaaaa'),
	true,
	'username and password should both be valid'
);

validate(
	'timmytumbla123',
	'a',
	`Your username: 'timmytumbla123' is too long! You need to lose 2 characters`
);
validate(
	'',
	'a',
	`Your username: '' is too short! You need to have atleast one character`
);
validate(
	'Ti&mmo*',
	'a',
	`Your username: 'Ti&mmo*' containes some invalid characters; &,*`
);
validate(
	'Timmy',
	'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
	`Your password: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa' is too long! You need to lose ${'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
		.length - 24} characters`
);
validate(
	'Timmy',
	'aaaaaaa',
	`Your password: 'aaaaaaa' is too short! You need to have atleast eight characters`
);
validate(
	'Timmy',
	'aaa#aaa$a&=',
	`Your password: 'aaa#aaa$a&=' containes some invalid characters; &,=`
);
validate(
	'Timmy',
	'aaaaaaaaa',
	`Your password: 'aaaaaaaaa' does not contain any Capital letters`
);
validate(
	'Timmy',
	'Aaaaaaaaa',
	`Your password: 'Aaaaaaaaa' does not contain any numeric characters`
);
validate(
	'Timmy',
	'Timmy012345',
	`Your password: 'Timmy012345' contains your username`
);
