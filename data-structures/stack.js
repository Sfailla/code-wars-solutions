/**
 * 
 * @description STACKS => First In Last Out
 * 
 *  Arrays are good examples of a stack
 *  they also come with methods => push, pop, peek, length
 * 
 *  basic example with array checking for palindrome
 /

 /**
 * @description STACKS => using array
 * 
 *  @function palindrome
 *  @param {string} word<string> -- value to check for palindrome
 * 		@var {array} letters[] -- array to hold stack values
 * 		@var {string} message<string> -- lets user know the outcome of func
 * 		@var {boolean} isPalindrome<boolean> -- check validity of palindrome
 * 	@return {message|isPalindrome} -- return values
 * 
 */

function palindrome(word) {
	// the stack
	const letters = [];
	// value to hold reverse letters
	let reverseWord = '';
	// value for our display message
	let message;
	// loop over word
	for (let i = 0; i < word.length; i++) {
		// push letters into STACK
		letters.push(word[i]);
	}
	// loop over word
	for (let i = 0; i < word.length; i++) {
		// copy each letter so last in is first out
		reverseWord += letters.pop();
	}
	// check if reversed word is same as regular word
	if (reverseWord === word) {
		message = `${word}: is a palindrome`;
		return {
			isPalindrome: true,
			message
		};
	} else {
		message = `${word}: is not a palindrome`;
		return {
			isPalindrome: false,
			message
		};
	}
}

// word to check
const word = 'racecar';
// run function for test
const { isPalindrome, message } = palindrome(word);
isPalindrome;
message;

/**
 * 
 * @description STACK => using class
 * 
 * @class Stack
 * @constructor
 *  @var {number} count -- 0 
 *  @var {object} storage -- {} 
 * 
 * @method push -- pushes an item into the stack
 * 	@param {*} value -- to add to stack
 * 
 * @method pop -- removes and returns last item from the stack
 * @return {*|undefined} result|undefined -- returns popped item 
 * 				 or undefined
 * 	
 * @method size -- pushes an item into the stack
 * @return {number} this.size -- returns # of items in stack 
 * 
 * @method peek -- shows last item in stack
 * @return {*|object} -- returns last itme in the stack
 * 
 */

class Stack {
	constructor() {
		this.count = 0;
		this.storage = {};
	}
	// adds a value to the end of the stack
	push = value => {
		// add value to end of object
		this.storage[this.count] = value;
		// increase the count
		this.count++;
	};
	// removes and returns value from the end of stack
	pop = () => {
		// return undefined if nothing is in stack
		if (this.count === 0) {
			return undefined;
		}
		// decrement the count
		this.count--;
		// store result for each item in storage
		const result = this.storage[this.count];
		// removes the first item in stack
		delete this.storage[this.count];
		// return popped item
		return result;
	};
	// returns the size of the stack (how many items)
	size = () => {
		return this.count;
	};
	// shows the value at the end of the stack;
	peek = () => {
		// return last value from stack
		return this.storage[this.count - 1];
	};
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push('dog');
stack.push('cat');
stack.push('snake');

console.log(stack.peek()); // snake
console.log(stack.pop()); // snake
console.log(stack.peek()); // cat
console.log(stack.size()); // 4
