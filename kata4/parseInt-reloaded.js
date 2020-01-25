function parseInt(string) {
	// todo: it's your task now

	let numberMap = {
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
		ten: 10,
		eleven: 11,
		twelve: 12,
		thirteen: 13,
		fourteen: 14,
		fifteen: 15,
		sixteen: 16,
		seventeen: 17,
		eightteen: 18,
		nineteen: 19,
		twenty: 20,
		thirty: 30,
		forty: 40,
		fifty: 50,
		sixty: 60,
		seventy: 70,
		eighty: 80,
		ninety: 90,
		hundred: 100,
		thousand: 1000,
		million: 1000000
	};

	const wordNumbersArray = [];

	const split = string.split(' ');
	split;

	split.map(words => {
		words = words.replace(/(-)/g, ' ');
		words = words.split(' ');
		words;
		wordNumbersArray.push(words);
	});

	wordNumbersArray;

	const formatNumbersArray = array => {
		let flatten = array.reduce((acc, val) => {
			return acc.concat(val);
		}, []);

		return flatten;
	};

	const numbersForWords = [];
	const formattedValues = formatNumbersArray(wordNumbersArray);

	formattedValues.map(values => {
		values;
		for (let [ key, val ] of Object.entries(numberMap)) {
			console.log(values);
			key;
			if (values === key) {
				numbersForWords.push(val);
			}
		}
	});

	const sumOfNumbers = array => {
		if (array.length > 1 && array.length < 4) {
			return array.reduce((acc, val) => {
				return acc + val;
			}, 0);
		} else if (array.length > 3) {
			array;
		} else {
			return array.join('');
		}
	};

	const sum = sumOfNumbers(numbersForWords);

	return sum;
}

console.log(parseInt('one'), 1);
console.log(parseInt('twenty'), 20);
console.log(parseInt('two hundred forty-six'), 246);
