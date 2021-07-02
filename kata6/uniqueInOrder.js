const uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  const copy = [...iterable]

  return copy.filter((letter, i) => {
    if (copy[i + 1] !== copy[i]) {
      return letter
    }
  })
}

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3])
