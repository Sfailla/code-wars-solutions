function getOutcomeValues(str) {
  let os = 0
  let xs = 0

  str
    .toLowerCase()
    .split('')
    .forEach(letter => {
      if (letter === 'x') return xs++
      if (letter === 'o') return os++
    })

  return {
    xcount: xs,
    ocount: os
  }
}

function XO(str) {
  const { xcount, ocount } = getOutcomeValues(str)

  return xcount === ocount ? true : false
}

console.log(XO('xo'), true)
console.log(XO('xxOo'), true)
console.log(XO('xxxm'), false)
console.log(XO('Oo'), false)
console.log(XO('ooom'), false)
console.log(XO('zpzpzpp'), true)
