function bubbleSort(array) {
  if (array.length <= 1) return array;
  
  for (let j = array.length; j >= 0; j--) { 
    for (let i = 0; i < j - 1; i++) {
      let swapCount = 0;
      if (compare(array[i], array[i + 1]) === 'not sorted') {
        let sorted = swap(array[i], array[i+1]);
        swapCount++;
        array[i] = sorted[0];
        array[i+1] = sorted[1];
      };
      if (swapCount === 0) {
        return array;
      }
    }
  }
  return array;
}

function compare(a,b) {
  return a > b ? 'not sorted' : 'sorted';
}

function swap(a, b) {
  return [b, a];
}

console.log(bubbleSort([1, 2, 4, 3, 5, 6, 7]));
console.log(bubbleSort([7,2,4,1,5,3,6]));
