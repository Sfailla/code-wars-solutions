function Tests() {
	const describe = function(message, fn) {
		return `${message}: \n ` + fn();
	};

	const it = function(message, fn) {
		return `${message}: \n ` + fn();
	};

	const assertEquals = function(a, b) {
		const passMsg = 'you passed!!';
		const failMsg = `expected: ${b}, instead got: ${a}`;

		return a === b ? passMsg : failMsg;
	};

	return {
		describe,
		it,
		assertEquals
	};
}

const Test = new Tests();

export { Test };

Test.describe('unit test', function() {
	const sum = (a, b) => a + b;
	Test.assertEquals(sum(2, 3), 5);
	Test.assertEquals(sum(5, 5), 10);
});

// const Test = {
// 	describe: function(message, fn) {
// 		return `${message}: \n ` + fn();
// 	},

// 	it: function(message, fn) {
// 		return `${message}: \n ` + fn();
// 	},

// 	assertEquals: function(a, b) {
// 		const passMsg = 'you passed!!';
// 		const failMsg = `expected: \n ${b}, instead got: ${a}`;

// 		return a === b ? passMsg : failMsg;
// 	}
// };

// export { Test };
