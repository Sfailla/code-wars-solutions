function displayLargeNumber(n) {
	let answer = n.toString().split(/(?=(?:\d{3})+(?:\.|$))/g);
	// .join(',');

	return answer;
}

console.log(displayLargeNumber(1234554245245245245));
