String.prototype.trim = function(c) {
	// code goes here
	let str = this.toLowerCase().split();
	// let smallStr = c.toLowerCase();

	return str;
};

let str = 'Hello Worldlll';
str = str.trim('l');
console.log(str);

console.log('LLLHello Worldlll'.trim('l'), 'Hello World');
console.log('   Hello World                 '.trim(), 'Hello World');
console.log('XVisca ElbarcaXX'.trim('X'), 'Visca Elbarca');
