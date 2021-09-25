const checkEquality = (arr1, arr2) => {
  return arr1.every((element, index) => {
    return element === arr2[index]
  })
}

function dirReduc(arr) {
  // solve

  return arr
}

console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), ['WEST'])
// console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), ['NORTH', 'WEST', 'SOUTH', 'EAST'])
// console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), [])
