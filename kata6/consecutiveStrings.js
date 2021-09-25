function longestConsec(strarr, k) {
  // your code
  const copy = strarr
  const groups = []
  let largest = { groupLength: 0, group: '' }

  if (k <= 0 || k > copy.length) return largest.group

  for (let i = 0; i < copy.length; i++) {
    const indices = copy.slice(i, i + k)
    groups.push(indices)
  }

  groups.forEach(group => {
    if (group.join('').length > largest.groupLength) {
      largest = { groupLength: group.join('').length, group: group.join('') }
    }
  })

  return largest.group
}

console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2), 'abigailtheta')
console.log(
  longestConsec(
    ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
    1
  ),
  'oocccffuucccjjjkkkjyyyeehh'
)
console.log(longestConsec([], 3), '')
console.log(
  longestConsec(
    ['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'],
    2
  ),
  'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck'
)
console.log(
  longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
  'wlwsasphmxxowiaxujylentrklctozmymu'
)
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2), '')
console.log(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3),
  'ixoyx3452zzzzzzzzzzzz'
)
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15), '')
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0), '')
