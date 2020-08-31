/*

Write a function, factory, that takes a number as its parameter and returns 
another function.

The returned function should take an array of numbers as its parameter, and 
return an array of those numbers multiplied by the number that was passed into 
the first function.

In the example below, 5 is the number passed into the first function. So it 
returns a function that takes an array and multiplies all elements in it by 
five.

Translations and comments (and upvotes) welcome!

Example
var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
fives(myArray);               //returns [5, 10, 15];

*/

function factory(x) {
	// create a function to return from factory
	return arr => arr.map(val => val * x);
}

const myArray = [ 1, 2, 3 ];

const threes = factory(3);
console.log(threes(myArray), [ 3, 6, 9 ]);

const fives = factory(5);
console.log(fives(myArray), [ 5, 10, 15 ]);
