const progMess = (a, b) => a + b

const status = {
  'In Progress': progMess(5, 2),
  Declined: 'this is declined',
  Accepted: 'this is accepted'
}

const fromServer = 'In Progress'

status[fromServer]
