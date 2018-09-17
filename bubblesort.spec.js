describe('Bubble Sort', function() {
  beforeAll(function() {
    //    spyOn(bubbleSort, 'swap').and.callThrough(); // replace existing `bubbleSort['swap']` method
    spyOn(window, 'compare').and.callThrough(); // replace existing `bubbleSort[`compare`] method
  });

  it('handles an empty array and swaps 0 times', function() {
    expect(bubbleSort([])).toEqual([]);
    bubbleSort([]);
    //    expect(bubbleSort.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(0);
  });

  it('handles an array with one element and swaps 0 times', function() {
    expect(bubbleSort([1])).toEqual([1]);
    bubbleSort([1]);
    //    expect(bubbleSort.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(0);
  });

  it('sorts an array of length greater than 1', function() {
    expect(bubbleSort([1, 2])).toEqual([1, 2]);
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  it('sorts an array [1,2,3] and swaps 0 times and compares 2 times', function() {
    bubbleSort([1, 2, 3]);
    //    expect(bubbleSort.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(2);
  });

  it('sorts an array [3,2,1] and swaps 3 times and compares 3 times', function() {
    bubbleSort([3, 2, 1]);
    //    expect(bubbleSort.swap.calls.count()).toEqual(3);
    expect(window.compare.calls.count()).toEqual(3);
  });

  it('sorts an array [3,1,2] and swaps 2 times and compares 3 times', function() {
    bubbleSort([3, 1, 2]);
    //    expect(bubbleSort.swap.calls.count()).toEqual(3);
    expect(window.compare.calls.count()).toEqual(3);
  });

  /*  it('sorts an array [4,3,2,1] and swaps # times and compares # times', function() {
    bubbleSort([4, 3, 2, 1]);
    expect(bubbleSort.swap.calls.count()).toEqual();
    expect(bubbleSort.compare.calls.count()).toEqual();
  });*/
});
