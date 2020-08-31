function longestRepetition(s) {
	let i = 0;
	let seq = 0;
	let results = [];
	let largest = 0;
	let answer = [];

	while (i < s.length) {
		let current = s[i];
		let next = s[i + 1];

		if (results[seq] === undefined) {
			results[seq] = [ current, 0 ];
		}

		results[seq][1]++;

		if (current !== next) {
			seq++;
		}

		i++;
	}
	results.forEach(arr => {
		if (largest < arr[1]) {
			largest = arr[1];
			answer = arr;
		}
	});

	return answer;
}

// console.log(longestRepetition('aaaabb'), [ 'a', 4 ]);
console.log(longestRepetition('bbbaaabaaaa'), [ 'a', 4 ]);
// console.log( longestRepetition("cbdeuuu900"),  ["u",3] );
// console.log( longestRepetition("abbbbb"),      ["b",5] );
// console.log( longestRepetition("aabb"),        ["a",2] );
// console.log( longestRepetition(""),            ["",0] );
// console.log( longestRepetition("ba"),          ["b",1] );
