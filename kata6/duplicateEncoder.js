function duplicateEncode(word) {
  const copy = [...word.toLowerCase()]
  let answerString = ''

  const map = copy.reduce((acc, obj) => {
    acc[obj] = acc[obj] || 0
    acc[obj]++

    return acc
  }, {})

  copy.forEach(letter => (map[letter] === 1 ? (answerString += '(') : (answerString += ')')))

  return answerString
}

console.log(duplicateEncode('din'), '(((')
console.log(duplicateEncode('recede'), '()()()')
console.log(duplicateEncode('Success'), ')())())', 'should ignore case')
console.log(duplicateEncode('(( @'), '))((')
