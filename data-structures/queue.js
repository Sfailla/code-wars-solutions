/**
 * @description QUEUE 
 * -In computer science, a queue is a particular kind of abstract data type or 
 * -collection in which the entities in the collection are kept in order and the 
 * -principle (or only) operations on the collection are the addition of entities 
 * -to the rear terminal position, known as enqueue, and removal of entities from 
 * -the front terminal position, known as dequeue. This makes the queue a 
 * -First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first 
 * -element added to the queue will be the first one to be removed. This is equivalent 
 * -to the requirement that once a new element is added, all elements that were added 
 * -before have to be removed before the new element can be removed. Often a peek or 
 * -front operation is also entered, returning the value of the front element without 
 * -dequeuing it. A queue is an example of a linear data structure, or more abstractly 
 * -a sequential collection.
 */

/**
* @class Queue
*/
class PriorityQueue {
	constructor() {
		this.collection = [];
	}

	printCollection = () => {
		return this.collection && console.log(this.collection);
	};

	enqueue = element => {
		if (this.isEmpty()) {
			console.log('empty');
			this.collection.push(element);
		} else {
			let added = false;
			for (let i = 0; i < this.collection.length; i++) {
				if (element[i] < this.collection[i[1]]) {
					this.collection.splice(i, 0, element);
					added = true;
					break;
				}
			}
			if (!added) {
				this.collection.push(element);
			}
		}
	};

	dequeue = () => {
		const value = this.collection.shift();
		return [ ...value ];
	};

	front = () => {
		return this.collection[0];
	};
	size = () => {
		return this.collection.length;
	};
	isEmpty = () => {
		return !this.collection.length;
	};
}

const A = new PriorityQueue();

A.enqueue([ 'dog', 1 ]);
A.enqueue([ 'cat', 2 ]);
A.enqueue([ 'fatcat', 5 ]);
A.enqueue([ 'socks', 2 ]);
A.printCollection();
A.dequeue('dog');
