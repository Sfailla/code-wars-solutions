function args_count(...args) {
	// spread the arguments and return the length. ES6
	return args.length;
}

args_count('A', 'B', 'C'); // 5
