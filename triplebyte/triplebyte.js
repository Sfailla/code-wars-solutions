function incr(num) {
	this.count++;
}

incr.count = 0;

let i;

for (let i = 0; i < 10; i++) {
	if (i < 5) {
		incr(i);
	}
}

console.log(incr.count);
