function isValidWalk(walk) {
  //insert brilliant code here
  if (walk.length > 10 || walk.length < 10) return false

  const map = walk.reduce((acc, obj) => {
    acc[obj] = acc[obj] || 0
    acc[obj]++

    return acc
  }, {})

  return map['n'] === map['s'] && map['w'] === map['e']
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'w', 'e']), 'should return false')
