function accum(s) {
  s = s.split('');
  const sequence = [];

  for (let i = 0; i < s.length; i++) {
    let letters = s[i];
    letters = letters.toLowerCase();
    letters = letters.slice(0).toUpperCase() + letters.slice(0).repeat(i);
    sequence.push(letters);
  }

  return sequence.join('-');
}

function accum(s) {
  return s
    .toLowerCase()
    .split('')
    .map((letter, i) => {
      return letter.slice(0).toUpperCase() + letter.slice(0).repeat(i);
    })
    .join('-');
}

console.log(
  accum('ZpglnRxqenU'),
  'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
);
console.log(
  accum('NyffsGeyylB'),
  'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
);
console.log(
  accum('MjtkuBovqrU'),
  'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
);
console.log(
  accum('EvidjUnokmM'),
  'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
);
console.log(
  accum('HbideVbxncC'),
  'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
);
