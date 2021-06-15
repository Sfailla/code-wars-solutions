function alphabetPosition(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'

  const letterArr = [...letters]

  const map = letterArr.reduce((acc, obj, idx) => {
    acc[obj] = idx + 1

    return acc
  }, {})

  const formatText = [...text.toLowerCase().replace(/[^a-z]/gi, '')]

  const code = formatText.map(letter => map[letter]).join(' ')

  return code
}

console.log(
  alphabetPosition("The sunset sets at twelve o' clock."),
  '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
)
console.log(
  alphabetPosition('The narwhal bacons at midnight.'),
  '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
)
console.log(alphabetPosition('rey0.:^l'), '18 5 25 12')
console.log(alphabetPosition('6:*5%*.*'), '')
