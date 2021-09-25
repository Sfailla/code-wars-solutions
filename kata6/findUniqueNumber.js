function findUniq(arr) {
  const numberMap = arr.reduce((acc, obj) => {
    acc[obj] = acc[obj] || 0
    acc[obj]++
    return acc
  }, {})

  for (const [key, val] of Object.entries(numberMap)) {
    if (val === 1) {
      return Number(key)
    }
  }
}

console.log(findUniq([0, 1, 0]), 1)
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2)
console.log(findUniq([3, 10, 3, 3, 3]), 10)
console.log(findUniq([0, 0, 0.55, 0, 0]), 0.55)
