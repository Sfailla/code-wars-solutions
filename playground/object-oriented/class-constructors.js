class Cat {
	constructor(name) {
		this.name = name;
	}
}

Cat.prototype = {
	constructor: Cat,
	catName: function(name = 'SJF') {
		this.name = name;
	}
};

class Bear {
	constructor(name) {
		this.name = name;
	}
}

Bear.prototype = {
	constructor: Bear
};

function Animal() {}

Animal.prototype = {
	constructor: Animal,
	eat: function() {
		console.log('nom nom nom');
	}
};

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

let carl = new Cat('Howard');

console.log(carl);
