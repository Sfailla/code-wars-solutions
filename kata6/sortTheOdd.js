function sortArray(array) {
  // Return a sorted array.
  const copy = [...array]
  const indexArray = []

  copy
    .filter((num, i) => num % 2 !== 0 && indexArray.push(i))
    .sort((a, b) => a - b)
    .forEach((val, i) => (array[indexArray[i]] = val))

  return array
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
// console.log(sortArray([]), [])
