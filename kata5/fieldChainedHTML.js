const Format = {
	tags: [ 'div', 'h1', 'p', 'span' ]
};

const elementFormatter = tag =>
	function elementFunc(...text) {
		return `<${tag}>${text.join('')}</${tag}>`;
	};

Format.tags.forEach(tag => {
	Format[tag] = elementFormatter(tag);
});

Format.tags.forEach(ogTag => {
	Format.tags.forEach(otherTag => {
		Format[ogTag][otherTag] = Format[otherTag];
	});
});

Format.div.hasOwnProperty('h1');
console.log(Format.p('bar')); // returns "<p>bar</p>"
console.log(Format.div.h1('foo')); // returns "<div>foo</div>"
console.log(Format.span('fiz')); // returns "<span>fiz</span>"
console.log(Format.h1('buz')); // returns "<h1>buz</h1>"
