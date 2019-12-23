/**
 *
 * Params for Set object
 * 
 * @param add - appends new value to Set object
 * @param clear - removes all elements from Set Object
 * @param delete - removes a value from Set object
 * @param entries - returns a new Iterator object that contains an array of [value, value] for each element in the Set object
 * @param forEach - iterator returns the callback for each value in Set object
 * 
*/

let colors = [ 'blue', 'yellow', 'green', 'blue', 'red', 'red' ];

// basic set wil remove duplicates from array
// const set = [ ...new Set(colors) ];

let setti = new Set();

setti.add(colors);
setti;

let set = [ ...new Set(colors) ];

set;
