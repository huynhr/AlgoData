var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should(); 

const {
  validAnagram,
  countUniqueValues,
  maxSubArraySum,
} = require('../algorithms/patterns');

describe('Frequency Counting Pattern(s)', () => {

  describe('Valid Anagrams', () => {
    it('Should be true', () => {
      const output = validAnagram('racecar', 'carrace');
      expect(output).to.be.equal(true);
    });
    
    it('Should be false', () => {
      const output = validAnagram('racecar', 'carrate');
      expect(output).to.be.equal(false);
    });
  
    
    it('Should be false', () => {
      const output = validAnagram('racecar', 'carracef');
      expect(output).to.be.equal(false);
    });
  });

});

describe('Multiple Pointers Pattern(s)', () => {

  describe('Count unique values', () => {
    it('Should equal 3', () => {
      const output = countUniqueValues([-1, -1, 0, 0, 3]);
      expect(output).to.be.equal(3);
    });
    
    it('Should equal 0', () => {
      const output = countUniqueValues([]);
      expect(output).to.be.equal(0);
    });
  
    it('Should equal 8', () => {
      const output = countUniqueValues([-1, 1, 1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7]);
      expect(output).to.be.equal(8);
    });
  });

});


describe('Sliding Windows Pattern', () => {

  describe('Max sub array sum', () => {
    it('Should equal 8', () => {
      const output = maxSubArraySum([1, 2, 6, 1, 6], 2);
      expect(output).to.be.equal(8);
    });

    it('Should equal null', () => {
      const output = maxSubArraySum([], 2);
      expect(output).to.be.equal(null);
    });
  });

});
