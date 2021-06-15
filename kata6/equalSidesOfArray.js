const getSum = arr => arr.reduce((acc, cur) => acc + cur, 0)

function findEvenIndex(arr) {
  let idxPosition = 0
  const copy = [...arr]

  for (let i = 0; i < copy.length; i++) {
    const leftSum = getSum(copy.slice(0, i))
    const rightSum = getSum(copy.slice(i + 1))

    if (leftSum === rightSum) {
      return idxPosition
    } else {
      idxPosition++
    }
  }
  return -1
}

// CLEVER ANSWER
function findEvenIndex(arr) {
  const sum = arr => arr.reduce((acc, cur) => acc + cur, 0)
  return arr.findIndex((val, idx) => sum(arr.slice(0, idx)) === sum(arr.slice(idx + 1)))
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3)
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1)
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1)
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3)
