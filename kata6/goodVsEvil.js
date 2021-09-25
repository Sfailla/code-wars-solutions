function goodVsEvil(good, evil) {
  const goodMap = { 0: 1, 1: 2, 2: 3, 3: 3, 4: 4, 5: 10 }
  const evilMap = { 0: 1, 1: 2, 2: 2, 3: 2, 4: 3, 5: 5, 6: 10 }

  const getTeamValuesArray = (map, array) => {
    return array.split(' ').map((val, index) => map[index] * val)
  }

  const getSum = array => array.reduce((acc, cur) => acc + cur, 0)

  const goodTeamArray = getTeamValuesArray(goodMap, good)
  const evilTeamArray = getTeamValuesArray(evilMap, evil)

  const goodSum = getSum(goodTeamArray)
  const evilSum = getSum(evilTeamArray)

  const evilWinMsg = 'Battle Result: Evil eradicates all trace of Good'
  const goodWinMsg = 'Battle Result: Good triumphs over Evil'
  const tieMsg = 'Battle Result: No victor on this battle field'

  return goodSum > evilSum ? goodWinMsg : goodSum < evilSum ? evilWinMsg : tieMsg
}

console.log(
  goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'),
  'Battle Result: Evil eradicates all trace of Good'
)
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil')
console.log(
  goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'),
  'Battle Result: No victor on this battle field'
)
