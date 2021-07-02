function iqTest(numbers) {
  const numArray = numbers.split(' ')

  let evenMarker = [],
    oddMarker = []

  numArray.map((num, i) => {
    if (num % 2 === 0) {
      evenMarker.push({ num, idx: i + 1 })
    }
    if (num % 2 !== 0) {
      oddMarker.push({ num, idx: i + 1 })
    }
  })

  return evenMarker.length === 1 ? evenMarker[0].idx : oddMarker[0].idx
}

// CLEVER ANSWER
function iqTest(numbers) {
  numbers = numbers.split(' ').map(function (el) {
    return parseInt(el)
  })

  var odd = numbers.filter(function (el) {
    return el % 2 === 1
  })
  var even = numbers.filter(function (el) {
    return el % 2 === 0
  })

  return odd.length < even.length ? numbers.indexOf(odd[0]) + 1 : numbers.indexOf(even[0]) + 1
}

console.log(iqTest('2 4 7 8 10'), 3)
console.log(iqTest('1 2 2'), 1)
console.log(
  iqTest(
    '79 27 77 57 37 45 27 49 65 33 57 21 71 19 75 85 65 61 23 97 85 9 23 1 9 3 99 77 77 21 79 69 15 37 15 7 93 81 13 89 91 31 45 93 15 97 55 80 85 83'
  )
)
