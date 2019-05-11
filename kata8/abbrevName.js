const abbrevName = name => {
	let answer = [];

	return name.split(' ').map(i => i[0]).join('');
};

console.log(abbrevName('Sam Harris'));
