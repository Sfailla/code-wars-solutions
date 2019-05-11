function grow(x) {
	// return eval(x.join('*')); // <-- very clever solution
	return x.reduce((acc, val) => acc * val);
}

grow([ 1, 2, 3 ]); // 6
grow([ 4, 1, 1, 1, 4 ]); // 16
