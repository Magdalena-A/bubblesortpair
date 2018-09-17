describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array with one element', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('sorts an array of length greater than 1', function() {
    expect(bubbleSort([1, 2])).toEqual([1, 2]);
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
  });
});
