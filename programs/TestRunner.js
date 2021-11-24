/**
 * TEST RUNNER:
 *  - created a test running app that allows you to run tests and assert the results
 */

class TestRunner {
  constructor() {
    this.beforeAll = []
    this.afterAll = []
    this.beforeEach = []
    this.afterEach = []
    this.describeState = []
    this.testState = []
    this.output = []

    this.totalTests = 0
    this.passedTests = 0
    this.failedTests = 0
  }

  beforeAll(fn) {
    this.beforeAll.push(fn)
  }
  afterAll(fn) {
    this.afterAll.push(fn)
  }
  beforeEach(fn) {
    this.beforeEach.push(fn)
  }
  afterEach(fn) {
    this.afterEach.push(fn)
  }

  describe(name, fn) {
    this.describeState = { name, testCases: [] }
    this.beforeAll.map(fn => fn.apply(this))

    fn.apply(this)

    this.afterAll.map(fn => fn.apply(this))
    this.output.push(this.describeState)
  }

  test(description, fn) {
    this.totalTests++
    if (this.beforeEach) this.beforeEach.map(fn => fn.apply(this))
    this.testState = { name: description, tests: [] }

    fn.apply(this)

    if (this.afterEach) this.afterEach.map(fn => fn.apply(this))
    this.describeState.testCases.push(this.testState)
  }

  assertEquals(a, b) {
    const passMsg = 'test passed!!'
    const failMsg = `test failed! expected: ${b}, instead got: ${a}`

    if (a === b) {
      this.passedTests++
      this.testState.tests.push({
        name: `expect ${a} toEqual ${b}`,
        status: true,
        message: passMsg
      })
    } else {
      this.failedTests++
      this.testState.tests.push({
        name: `expected ${a} toEqual ${b}`,
        status: false,
        message: failMsg
      })
    }
  }

  showTestsResults() {
    console.log(
      `Total Tests: ${this.totalTests}, \n Test Suites: ${this.passedTests} passed, ${this.failedTests} failed \n`
    )

    if (this.output.length > 0) {
      const results = this.output.map(suite => {
        return suite.testCases.map(testCase => {
          const logTitle = `${suite.name}:\n${testCase.name}`
          const testResults = testCase.tests.map(test => {
            return test.status
              ? ` ✔️ ${test.message}: ${test.name}`
              : ` ❌ ${test.message}: ${test.name}`
          })

          const results = [...testResults].join('\n').trim()

          return `${logTitle}\n ${results}`
        })
      })

      return [results].join('\n')
    }

    return 'No tests to run'
  }

  runTests() {
    this.showTestsResults()
  }
}

const Test = new TestRunner()

export { Test }

const sum = (a, b) => a + b

Test.describe('unit test', function () {
  Test.test('should produce correct sum of 2 numbers', () => {
    Test.assertEquals(sum(2, 3), 5)
    Test.assertEquals(sum(5, 5), 10)
    Test.assertEquals(sum(2, 3), 15)
  })
})

Test.runTests()
