// ARRAY CHALLENGE
// use the filter method to remove all odd numbers from array

const getEvenNumbers = numbersArray =>
	numbersArray.filter(num => num % 2 === 0);

console.log(getEvenNumbers([ 12, 14, 15, 16 ])); // should == [2,4,6]
