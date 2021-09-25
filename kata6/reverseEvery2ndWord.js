function reverse(str) {
  //WRITE SOME MAGIC
  const reverseWord = word => word.split('').reverse().join('')

  return str
    .split(' ')
    .map((word, index) => (index % 2 === 1 ? reverseWord(word) : word))
    .join(' ')
    .trim()
}

console.log(reverse('Reverse this string, please!'), 'Reverse siht string, !esaelp')
console.log(
  reverse("I really don't like reversing strings!"),
  "I yllaer don't ekil reversing !sgnirts"
)
