function elementsSum(arr, d) {
	//your code here
  const array = [];
    let j = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      const newElement = 0;
      if (!element[j]) {
        j--;
        array.push(newElement);
      } else if (element[j]) {
        const decreaseValue = element[j--];
        array.push(decreaseValue);
      }
    }
    
    if (d && d > 0) array.push(d);

    return array.reduce((acc, arr) => acc + arr, 0);
}

console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]), 16);
console.log(
	elementsSum([ [ 3 ], [ 4, 6, 5, 3, 2 ], [ 9, 8, 7, 4 ] ]),
	15
);
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []]), 7);
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5), 12);
console.log(elementsSum([ [ 3, 2 ], [ 4 ], [] ]), 0);
console.log(elementsSum([ [ 4, 0 ], [ 0, 0 ] ]), 0);
