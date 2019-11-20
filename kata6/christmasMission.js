function merryChristmas(s) {
	// solution
	let str = 'MerryChristmas';
	let times = 0;
	while (true) {
		for (var i in str) {
			if (s.indexOf(str[i]) < 0) {
				return times;
			}
			s = s.replace(str[i], '');
		}
		times++;
	}

	return times;
}

console.log(merryChristmas('MMmmeerrrrrryyCChhiissssttaa'));
