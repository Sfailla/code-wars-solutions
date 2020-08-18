/**
 * Array: making my own custom classes for 
 *        higher order Array methods
 * @param sort    -  sorts an array
 * @param reverse -  reverse order of array
 * @param slice   -  remove content of array at index
 * @param splice  -  remove or add content to array by index
 */

class Arr {
	constructor(...items) {
		this.arr = new Array(...items);
	}

	sort(compareFunction) {
		return this.arr.sort(compareFunction);
	}

	reverse() {
		return this.arr.reverse();
	}

	slice(start, end) {
		return this.arr.slice(start, end);
	}

	splice(start, ...params) {
		return this.arr.splice(start, ...params);
	}
}
