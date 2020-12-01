export default function Tests() {
	const describe = function(message, cb) {
		return `${message}: \n ` + cb();
	};

	const assertEquals = function(a, b) {
		const passMsg = 'you passed!!';
		const failMsg = `expected: ${b}, instead got: ${a}`;

		return a === b ? passMsg : failMsg;
	};

	describe('entity', () => {
		assertEquals(bowlingPins([ 2, 3 ]), 'I I I I\n I I I \n       \n   I   ');
		assertEquals(bowlingPins([ 1, 2, 10 ]), 'I I I  \n I I I \n    I  \n       ');
	});

	return {
		describe,
		assertEquals
	};
}

const Test = new Tests();

Test.describe('Example Tests', function() {
	const arr = [ 1, 2, 3, 5 ];
	const string = 'a string';
	return [ ...arr, string ];
});

// TEST MOCK USING OBJECT

// const Test = {
// 	describe: function(message, cb) {
//     return `${message}: \n ` + cb();
// 	},

// 	assertEquals: function(a, b) {
// 		const passMsg = 'you passed!!';
// 		const failMsg = `expected: \n ${b}, instead got: ${a}`;

// 		return a === b ? passMsg : failMsg;
// 	}
// };
