// map status without if/switch statements
const progMess = (a, b) => a + b

const status = {
  'In Progress': progMess(5, 2),
  Declined: 'this is declined',
  Accepted: 'this is accepted'
}

const fromServer = 'In Progress'

status[fromServer]

const string = 'requests'

// remove last letter
const truncateLastLetter = str => [...str].splice(0, str.length - 1)

console.log(truncateLastLetter(string))
