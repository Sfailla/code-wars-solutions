function tribonacci(signature, n) {
  //your code here

  if (n === 0) return []
  if (n === 1) return [1]

  const newArr = [...signature]

  let idx = 0
  while (newArr.length < n) {
    if (idx < n) {
      let total = newArr[idx] + newArr[idx + 1] + newArr[idx + 2]
      newArr.push(total)
      idx++
    }
  }

  return newArr
}

// CLEVER ANSWER
function tribonacci(signature, n) {
  const result = signature.slice(0, n)
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0)
  }
  return result
}

console.log(tribonacci([1, 1, 1], 10), [1, 1, 1, 3, 5, 9, 17, 31, 57, 105])
console.log(tribonacci([0, 0, 1], 10), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
console.log(tribonacci([0, 1, 1], 10), [0, 1, 1, 2, 4, 7, 13, 24, 44, 81])
console.log(tribonacci([1, 0, 0], 10), [1, 0, 0, 1, 1, 2, 4, 7, 13, 24])
console.log(tribonacci([0, 0, 0], 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
console.log(tribonacci([1, 2, 3], 10), [1, 2, 3, 6, 11, 20, 37, 68, 125, 230])
console.log(tribonacci([3, 2, 1], 10), [3, 2, 1, 6, 9, 16, 31, 56, 103, 190])
console.log(tribonacci([1, 1, 1], 1), [1])
console.log(tribonacci([300, 200, 100], 0), [])
