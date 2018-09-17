function bubbleSort(array) {
  // function swap(a, b) {
  //   // value at a particular index
  // }

  if (array.length <= 1) return array;
  
  //
  for (let j = array.length; j > 0; j--) {
    let sorted = false;
    for (let i = 0; i < j - 1; i++) {
      // foo
      compare(array, i, array[i], array[i + 1], sorted);
    }
  }

  return array;
}

function compare(array, i, a, b, sorted) {
  if (a > b) {
    swap(array, i, a, b, sorted);
  }
  //console.log("compared!");
}

function swap(array, i, a, b, sorted) {
  //sorted = true;
  array[i] = b;
  array[i+1] = a;
  //console.log("swapped!");
}

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7]));
