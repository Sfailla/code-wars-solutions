const getSumArray = nums => {
  let sum = []
  nums.forEach((num, i) => {
    let total = num + nums[i + 1]
    sum.push(total)
  })
  return sum
}

function largestPairSum(numbers) {
  let largestSum = Math.min(...numbers)
  const sumArr = getSumArray(numbers)

  sumArr.forEach(number => {
    if (largestSum < number) {
      largestSum = number
    }
  })

  return largestSum
}

// CLEVER ANSWER CODEWARS
function largestPairSum(numbers) {
  const [a, b] = numbers.sort((a, b) => b - a)
  return a + b
}

console.log(largestPairSum([23, 10, 14, 2, 19]), 42, 'Sum should be 42')
console.log(largestPairSum([-100, -29, -24, -19, 19]), 0, 'Sum should be 0')
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]), 10, 'Sum should be 10')
console.log(largestPairSum([-10, -8, -16, -18, -19]), -18, 'Sum should be -18')
