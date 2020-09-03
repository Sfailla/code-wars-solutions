/**
 * 
 * @description DISJOINT SET
 * 
 * -Disjoint-set data structure (also called a union–find data structure or merge–find set)
 * -is a data structure that tracks a set of elements partitioned into a number of disjoint 
 * -(non-overlapping) subsets. It provides near-constant-time operations 
 * -(bounded by the inverse Ackermann function) to add new sets, to merge existing sets, and 
 * -to determine whether elements are in the same set. In addition to many other uses 
 * -(see the Applications section), disjoint-sets play a key role in Kruskal's algorithm for 
 * -finding the minimum spanning tree of a graph.
 * 
 */

/** @class MySet */

class MySet {
	constructor() {
		this.collection = [];
	}
	/**
   * checks if value is in collection
   * @param {*} element the element being checked in collection
   * @return {boolean} true|false returns true or false
   */
	has = element => {
		return this.collection.indexOf(element) !== -1;
	};
	/**
   * returns collection array
   * @return {*} this.collection[]
   */
	values = () => this.collection;
	/**
   * adds a value to the collection
   * @param {*} value
   * @return {boolean} true|false; 
   */
	add = value => {
		if (!this.has(value)) {
			this.collection.push(value);
			return true;
		}
		return false;
	};
	/**
   * removes value from the collection
   * @param {*} value the value to remove;
   * @return {boolean} true|false; 
   */
	remove = value => {
		if (this.has(value)) {
			const filtered = this.collection.filter(item => {
				return item !== value;
			});
			this.collection = filtered;
			return true;
		}
		return false;
	};
	/**
   * returns size of the collection
   * @param {*} value the value to remove;
   * @return {boolean} returns true|false; 
   */
	size = () => this.collection.length;

	/**
   * the joining of two different Set classes
   * @param {*} otherSet a Set class to join
   * @const {array} unionSet create new Set instance.
   * @const {array} firstSet current Set values
   * @const {array} secondSet values of otherSet
   * @return {class} returns newly joined Set class
   */
	union = otherSet => {
		const unionSet = new MySet();
		const firstSet = this.values();
		const secondSet = otherSet.values();

		firstSet.forEach(element => unionSet.add(element));
		secondSet.forEach(element => unionSet.add(element));
		return unionSet;
	};
	/**
   * the same elements in both Set classes
   * @param {*} otherSet a Set class to compare
   * @const {array} intersectionSet new Set instance
   * @const {array} firstSet current Set values
   * @return {class} intersectionSet differences between other and different Set
   */
	intersection = otherSet => {
		const intersectionSet = new MySet();
		const firstSet = this.values();
		firstSet.forEach(element => {
			if (otherSet.has(element)) {
				intersectionSet.add(element);
			}
		});
		return intersectionSet;
	};

	/**
   * the difference of two different Set classes
   * @param {*} otherSet a Set class to compare
   * @const {array} differentSet new Set instance
   * @const {array} firstSet current Set values
   * @return {class} returns differences between other and different Set
   */
	difference = otherSet => {
		const differentSet = new MySet();
		const firstSet = this.values();
		firstSet.forEach(element => {
			if (!otherSet.has(element)) {
				differentSet.add(element);
			}
		});
		return differentSet;
	};
	/**
   * the identical elements of two different Set classes
   * @param {*} otherSet a Set class to compare
   * @const {array} firstSet current Set values
   * @return {boolean} true if every element matches. else false;
   */
	subset = otherSet => {
		const firstSet = this.values();
		return firstSet.every(value => otherSet.has(value));
	};
}

const set = new MySet();

set.add('dog');
set.add('bird');
set.add('bike');
set.add(1);
set.add(2);
set.size();

set.has(1);
set.values();
set.remove('dog');
set.values();

const A = new MySet();
const B = new MySet();
const C = new MySet();
const D = new MySet();

A.add('donald');
A.add('trump');
A.add('alex');
A.add('1');
A.add(1);
A.add(1);

B.add('mike');
B.add('scott');
B.add('maria');
B.add('5');
B.add(1);
B.add(1);
B.add(7);

C.add('a');
C.add('b');
C.add('c');
C.add('d');
C.add('e');
C.add('f');

D.add('a');
D.add('h');
D.add('c');
D.add('d');
D.add('s');
D.add('f');

let subsetAB = A.subset(B);
let subsetCD = C.subset(D);

let interSectAB = A.intersection(B).values();
let interSectCD = C.intersection(D).values();

let uniteAB = A.difference(B).values();
let uniteCD = C.difference(D).values();
