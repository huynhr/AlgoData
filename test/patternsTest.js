var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should(); 

const {
  validAnagram,
  countUniqueValues,
  maxSubArraySum,
  sameFrequency,
  areThereDuplicates,
  averagePair,
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

  describe('Same Frequencies of numbers', () => {
    it('Should be true', () => {
      const output = sameFrequency(1234, 4312);
      expect(output).to.be.true;
    });
    
    it('Should be false', () => {
      const output = sameFrequency(1234, 4317);
      expect(output).to.be.false; 
    });
    
    it('Should be false', () => {
      const output = sameFrequency(12340, 4317);
      expect(output).to.be.false;
    });
  });

  describe('Are there duplicates', () => {
    it('It should equal false', () => {
      const output = areThereDuplicates(1, 2, 3);
      expect(output).to.be.false;
    });

    it('It should equal true', () => {
      const output = areThereDuplicates('a', 'b', 'b', 'c');
      expect(output).to.be.true;
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

  describe('Average Pair', () => {
    it('Should equal true', () => {
      const output = averagePair([1, 2, 3, 4], 2.5);
      expect(output).to.be.true;
    });

    it('Should equal false', () => {
      const output = averagePair([1, 3, 5, 6, 7], 3.1);
      expect(output).to.be.false;
    });

    it('Should equal false', () => {
      const output = averagePair([], 2);
      expect(output).to.be.false;
    });

    it('Should equal true', () => {
      const output = averagePair([-2, -1, 3, 4, 5, 6, 7], 2);
      expect(output).to.be.true;
    });
  })
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
