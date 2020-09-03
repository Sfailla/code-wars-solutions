/**
 * 
 * @description STACKS => First In Last Out
 * 
 * In computer science, a stack is an abstract data type that serves as a collection 
 * of elements, with two principal operations:
 * push, which adds an element to the collection, and pop, which removes the most 
 * recently added element that was not yet removed. The order in which elements 
 * come off a stack gives rise to its alternative name, LIFO (last in, first out). 
 * Additionally, a peek operation may give access to the top without modifying the 
 * stack. The name "stack" for this type of structure comes from the analogy to a 
 * set of physical items stacked on top of each other, which makes it easy to take 
 * an item off the top of the stack, while getting to an item deeper in the stack 
 * may require taking off multiple other items first.
 * 
 /

 /**
 * @description STACKS => using array
 * 	basic example with array checking for palindrome
 * 
 *  @function palindrome
 *  @param {string} word<string> -- value to check for palindrome
 * 	@const {array} letters[] -- array to hold stack values
 * 	@let {string} message<string> -- lets user know the outcome of func
 * 	@let {boolean} isPalindrome<boolean> -- check validity of palindrome
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
 * @class Stack
 * 
 * @type {number} count 0 
 * @type {object} storage {} 
 */

class Stack {
	constructor() {
		this.count = 0;
		this.storage = {};
	}
	/** 
	 * pushes a value to the end of the stack
 	 * @param {*} value the value being pushed
	 */
	push = value => {
		this.storage[this.count] = value;
		this.count++;
	};
	/**
	 * removes and returns value from the end of stack
	 * @param {*} result the value that was popped off stack
	 * @return {*|boolean} if empty obj undefined is returned
	 */
	pop = () => {
		if (this.count === 0) {
			return undefined;
		}
		this.count--;
		const result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	};
	/**
	 * pushes an item into the stack
 	 * @return {number} # of items in stack 
	 */
	size = () => {
		return this.count;
	};
	/**
	 * shows last item in stack
	 * @return {*|object} last itme in the stack
	 */
	peek = () => {
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
