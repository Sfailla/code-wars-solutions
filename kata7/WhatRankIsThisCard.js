function rank(card) {
	function splitToCorrectArrayValues(input) {
		const split = input.split('');
		const cardType = split[0];
		const suite = split[1];

		return {
			cardType,
			suite
		};
	}

	function getCardValue(cardVal, suiteVal) {
		const isNumber = /[0-9]/g;
		const isLetter = /[A-Z]/g;

		const cardLetterValues = {
			T: 10,
			J: 11,
			Q: 12,
			K: 13,
			A: 14
		};

		if (cardVal < 2) return 0;
		if (cardVal.match(isNumber) && cardVal > 1) return cardVal;
		if (cardVal.match(isLetter)) {
			if (Object.keys(cardLetterValues).includes(cardVal)) {
				return cardLetterValues[cardVal];
			}
		}

		return 0;
	}

	const { cardType, suite } = splitToCorrectArrayValues(card);
	const answer = parseInt(getCardValue(cardType, suite));

	return answer;
}

console.log(rank('2s'), 2);
console.log(rank('7h'), 7);
console.log(rank('Jc'), 11);
console.log(rank('Xd'), 14);
console.log(rank('1d'), 0);
