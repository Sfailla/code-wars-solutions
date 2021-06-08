// return masked string
function maskify(cc) {
  if (cc.length <= 4) return cc

  const final = []
  const copycc = [...cc]

  const initial = copycc.slice(0, copycc.length - 4)
  const end = copycc.slice(copycc.length - 4)

  initial.forEach(num => final.push(num.replace(num, '#')))

  return [...final, ...end].join('')
}

// CLEVER ANSWER CODEWARS
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}

console.log(maskify('4556364607935616'), '############5616')
console.log(maskify('1'), '1')
console.log(maskify('11111'), '#1111')
