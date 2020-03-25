function wdm(talk) {
	return talk
		.split(' ').filter(
			words => words !== 'puke' && words !== 'hiccup' && words !== ''
		).join(' ');
}

console.log(
	wdm("puke All's well hiccup     that ends hiccup well puke"),
	"All's well that ends well"
);
console.log(
	wdm(
		'puke make hiccup hiccup money puke puke puke and hiccup hiccup puke spend hiccup puke puke it hiccup wisely.'
	),
	'make money and spend it wisely.'
);
