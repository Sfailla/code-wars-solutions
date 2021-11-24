const checkEquality = (arr1, arr2) => {
  return arr1.length === arr2.length ? arr1.every(element => arr2.includes(element)) : false
}

function dirReduc(arr) {
  // solve

  const nsMap = ['NORTH', 'SOUTH']
  const ewMap = ['EAST', 'WEST']

  const copy = arr.slice()

  const dirs = copy.filter((val, i) =>
    // checkEquality(arr.slice(i, i + 2), nsMap)
    checkEquality(arr.slice(i, i + 2), ewMap)
  )

  dirs

  return arr
}

console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), ['WEST'])
// console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), ['NORTH', 'WEST', 'SOUTH', 'EAST'])
// console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), [])
