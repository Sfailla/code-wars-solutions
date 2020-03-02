/*

params//
val=your value to the organisation
happ=her happiness level at the time of asking and finally
x=The numbers of letters from 'sabbatical' that are present 
in string 'x'.

*/

function sabb(x, val, happ) {
	let letters = 'sabbatical';
	const numbersToAdd = [];

	const array = x.split('');
	let mapped = array.reduce((obj, val) => {
		val = val.toLowerCase();
		obj[val] = obj[val] || 0;
		obj[val]++;
		return obj;
	}, {});

	for (const [ key, val ] of Object.entries(mapped)) {
		if (letters.includes(key)) {
			numbersToAdd.push(val);
		}
	}

	const totalNums = [ ...numbersToAdd, val, happ ];
	const total = totalNums.reduce((acc, curr) => acc + curr, 0);

	return total > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
}

console.log(
	sabb('Can I have a sabbatical?', 5, 5),
	'Sabbatical! Boom!'
);
console.log(
	sabb('Why are you shouting?', 7, 2),
	'Back to your desk, boy.'
);
console.log(
	sabb('What do you mean I cant learn to code??', 8, 9),
	'Sabbatical! Boom!'
);
console.log(
	sabb('Please calm down', 9, 1),
	'Back to your desk, boy.'
);
console.log(
	sabb('aotiiiczlioyrqldiacbz', 3, 6),
	'Back to your desk, boy.'
);
