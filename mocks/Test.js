class TestRunner {
	constructor() {
		this.obj = {};
	}

	runTests() {
		this.obj;
	}

	describe(message, fn) {
		this.obj['describe'] = {
			message,
			fn: fn()
		};
	}

	it(message, fn) {
		this.obj['it'] = {
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
