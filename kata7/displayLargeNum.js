function displayLargeNumber(n) {
	// use regex to split number every 3 spaces into an array.
	let answer = n.toString().split(/(?=(?:\d{3})+(?:\.|$))/g);
	// then join array with commas
	answer = answer.join(',');
	// return the answer
	return answer;
}

console.log(displayLargeNumber(1234554245245245245));
