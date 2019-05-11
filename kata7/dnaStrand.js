function DNAStrand(dna) {
	let answer = [];

	dna = dna.split(' ');
	for (let i = 0; i < dna.length; i++) {
		for (let j = 0; j < dna[i].length; j++) {
			let letters = dna[i][j];

			switch (letters) {
				case 'A':
					answer.push('T');
					break;
				case 'T':
					answer.push('A');
					break;
				case 'G':
					answer.push('C');
					break;
				case 'C':
					answer.push('G');
					break;
				default:
					return answer;
			}
		}
	}
	return answer.join('');
}

console.log(DNAStrand('AAAA'));
console.log(DNAStrand('ATTGC'));
