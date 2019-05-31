const replicate = (times, number) => {
	if (times <= 0) {
		return [];
	} else {
		return [ number ].concat(replicate(times - 1, number));
	}
};

replicate(3, 5);
console.log(replicate(3, 5));
