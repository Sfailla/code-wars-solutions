const arr1 = [
  ['name', 'id', 'age', 'weight'],
  ['Susan', '3', '10', '120'],
  ['John', '1', '11', '150'],
  ['Bob', '2', '23', '90'],
  ['Ben', '4', '20', '100'],
];

const arr2 = [
  ['name', 'id', 'height'],
  ['Bob', '2', '50'],
  ['John', '1', '45'],
  ['Ben', '4', '43'],
  ['Susan', '3', '48'],
];

const arr3 = [
  ['name', 'id', 'parent'],
  ['Bob', '2', 'yes'],
  ['John', '1', 'yes'],
];

function parseArray(arr) {
  const [heading, ...items] = arr;

  const formatted = items.reduce((acc, data, i) => {
    const person = {};

    for (const [index, headings] of Object.entries(heading)) {
      person[headings] = data[index];
    }

    return [...acc, person];
  }, []);

  return formatted;
}

const allData = [...parseArray(arr1), ...parseArray(arr2), ...parseArray(arr3)];

const merge = allData.reduce((acc, currentPerson, i) => {
  let existingPersonIndex = acc.findIndex(person => person.id === currentPerson.id);

  if (existingPersonIndex >= 0) {
    acc[existingPersonIndex] = {
      ...acc[existingPersonIndex],
      ...currentPerson,
    };

    return acc;
  }

  return [...acc, currentPerson];
}, []);

console.log(merge);
console.log(parseArray(arr1));
