function getAverageAge(list) {
  const developerAges = []

  list.map(field => developerAges.push(field.age))

  const sum = arr => arr.reduce((acc, ages) => acc + ages, 0)

  const average = Math.round(sum(developerAges) / developerAges.length)

  return average
}

function getAverageAge(list) {
  Math.round(list.reduce((acc, obj) => acc + obj.age, 0) / list.length)
}

var list1 = [
  {
    firstName: 'Althea',
    lastName: 'I.',
    country: 'Philippines',
    continent: 'Asia',
    age: 81,
    language: 'Python',
  },
  {
    firstName: 'Nikau',
    lastName: 'R.',
    country: 'New Zealand',
    continent: 'Oceania',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Jakub',
    lastName: 'I.',
    country: 'Slovakia',
    continent: 'Europe',
    age: 28,
    language: 'Java',
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 99,
    language: 'Ruby',
  },
  {
    firstName: 'Amar',
    lastName: 'V.',
    country: 'Bosnia and Herzegovina',
    continent: 'Europe',
    age: 32,
    language: 'Ruby',
  },
  {
    firstName: 'Ximena',
    lastName: 'Q.',
    country: 'Mexico',
    continent: 'Americas',
    age: 28,
    language: 'Java',
  },
  {
    firstName: 'Seoyeon',
    lastName: 'J.',
    country: 'South Korea',
    continent: 'Asia',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'Andrei',
    lastName: 'E.',
    country: 'Romania',
    continent: 'Europe',
    age: 59,
    language: 'C',
  },
  {
    firstName: 'Artem',
    lastName: 'O.',
    country: 'Ukraine',
    continent: 'Europe',
    age: 29,
    language: 'Java',
  },
  {
    firstName: 'Sara',
    lastName: 'Y.',
    country: 'Montenegro',
    continent: 'Europe',
    age: 39,
    language: 'C',
  },
]

console.log(getAverageAge(list1), 46)
