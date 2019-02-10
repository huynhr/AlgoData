var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

const {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
} = require('../algorithms/sorting');

describe('Sorting Algorithms', () => {
  describe('BubbleSort', () => {
    it('Expected to equal [ 1, 4, 6, 7, 10, 34 ]', () => {
      const output = bubbleSort([4, 1, 7, 10, 34, 6]);
      expect(output).to.eql([1, 4, 6, 7, 10, 34]);
    });
  });
  describe('Selection sort', () => {
    it('Expected to equal [ 1, 4, 6, 7, 10, 34 ]', () => {
      const output = selectionSort([4, 1, 7, 10, 34, 6]);
      expect(output).to.eql([1, 4, 6, 7, 10, 34]);
    });
  });
  describe('Insertion sort', () => {
    it('Expected to equal [ 1, 4, 6, 7, 10, 34 ]', () => {
      const output = insertionSort([4, 1, 7, 10, 34, 6]);
      expect(output).to.eql([1, 4, 6, 7, 10, 34]);
    });
  });
  describe('Merge Sort', () => {
    it('Expected to equal [ 1, 4, 6, 7, 10, 34 ]', () => {
      const output = mergeSort([4, 1, 7, 10, 34, 6]);
      expect(output).to.eql([1, 4, 6, 7, 10, 34]);
    });
    it('Expected to equal [1, 2, 10, 14, 50, 50, 80, 99, 1000, 1001]', () => {
      const output = mergeSort([80, 10, 50, 1, 1000, 2, 50, 99, 1001, 14]);
      expect(output).to.eql([1, 2, 10, 14, 50, 50, 80, 99, 1000, 1001]);
    });
  });
});
