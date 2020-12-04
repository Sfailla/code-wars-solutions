// function bowlingPins(arr) {
// 	const PIN_COUNT = 10;
// 	let PIN_SHAPE = 'I';

// 	const getPinSizeAndShape = (pinCount, pinShape) => {
// 		let result = '';

// 		let num = 1;
// 		while (num <= pinCount) {
// 			result += pinShape;
// 			num++;
// 		}

// 		return result;
//   };

//   const pins = getPinSizeAndShape(PIN_COUNT, PIN_SHAPE);

// 	pins

// 	return arr;
// }

function bowlingPins(arr) {
	const PIN_COUNT = 10;
	let PIN_SHAPE = 'I';

	const obj = {};
	let result = [];

	let i;
	for (i = 1; i <= PIN_COUNT; i++) {
		result.push(i);
	}

	result;

	let reduced = result.reduce((obj, items, i) => {
		const arr = [];

		items;

		return obj;
	}, {});

	reduced;

	return arr;
}

console.log(bowlingPins([ 2, 3 ]), 'I I I I\n I I I \n       \n   I   ');
// console.log(bowlingPins([1,2,10]), "I I I  \n I I I \n    I  \n       ");
