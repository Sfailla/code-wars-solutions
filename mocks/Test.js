class TestRunner {
	constructor() {
		this.cache = {};
	}

	runTests() {
		this.cache;
	}

	describe(message, fn) {
		this.cache['describe'] = {
			message,
			fn: fn()
		};
	}

	it(message, fn) {
		this.cache['it'] = {
			message,
			fn: fn()
		};
	}

	assertEquals(a, b) {
		const passMsg = 'you passed!!';
		const failMsg = `expected: ${b}, instead got: ${a}`;

		return a === b ? passMsg : failMsg;
	}
}

const Test = new TestRunner();

export { Test };

const sum = (a, b) => a + b;

Test.describe('unit test', function() {
	Test.it('should sum 2 numbers', () => {
		Test.assertEquals(sum(2, 3), 5);
		Test.assertEquals(sum(5, 5), 10);
	});
});

Test.runTests();
