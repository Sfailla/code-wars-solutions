function greet(language) {
	const languages = {
		english: 'Welcome',
		czech: 'Vitejte',
		danish: 'Velkomst',
		dutch: 'Welkom',
		estonian: 'Tere tulemast',
		finnish: 'Tervetuloa',
		flemish: 'Welgekomen',
		french: 'Bienvenue',
		german: 'Willkommen',
		irish: 'Failte',
		italian: 'Benvenuto',
		latvian: 'Gaidits',
		lithuanian: 'Laukiamas',
		polish: 'Witamy',
		spanish: 'Bienvenido',
		swedish: 'Valkommen',
		welsh: 'Croeso'
	};

	// use bracket notation to access a variable in an object with a string name;
	let country = languages[language];

	switch (language) {
		case 'IP_ADDRESS_INVALID':
			return 'Welcome';
		case 'IP_ADDRESS_NOT_FOUND':
			return 'Welcome';
		case 'IP_ADDRESS_REQUIRED':
			return 'Welcome';
		default:
			return country;
	}
}

greet('english');
