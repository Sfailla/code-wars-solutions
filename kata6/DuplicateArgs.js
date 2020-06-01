function solution(...args) {
	const filtered = new Set(args).size;
	return filtered === args.length ? false : true;
}

// ONE LINER CREATIVE SOLUTIONS
// function solution(...args) {
//   return new Set(args).size !== args.length;
// }

console.log(solution(1, 2, 3), false);
console.log(solution(1, 2, 3, 6, 5, 6), true);
console.log(solution('a', 'b', 'c', 'a'), true);
console.log(solution(1, 2, 3, 'a', 'b'), false);
