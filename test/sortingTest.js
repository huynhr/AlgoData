var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

const {
  bubbleSort,
  selectionSort,
  insertionSort,
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
});