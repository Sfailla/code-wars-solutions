function writeOutput(inputData) {
  // Start writing code here to consume input, and return result.

  const duplicates = [];

  inputData.join(' ').split(' ');

  for (let i = 0; i < inputData.length; i++) {
    const firstLetter = inputData[i];
    const nextLetter = inputData[i + 1];

    if (firstLetter === nextLetter) {
      duplicates.push(firstLetter);
    }
  }

  duplicates;

  const degree = duplicates.join('');

  return degree;
}

console.log(writeOutput(['1 2 2 3 1']));
