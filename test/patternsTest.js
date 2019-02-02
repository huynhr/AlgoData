var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should(); 

const {
  validAnagram,
  countUniqueValues,
  maxSubarraySum,
  sameFrequency,
  areThereDuplicates,
  averagePair,
  isSubsequence,
  minSubArrayLen,
  findLongestSubstring,
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
  });

  describe('Is Subsequence', () => {
    it('Should equal true', () => {
      const output = isSubsequence('hello', 'hello world');
      expect(output).to.be.true;
    });
    it('Should equal true', () => {
      const output = isSubsequence(' cat', 'the dog and the ca dog t');
      expect(output).to.be.true;
    });
    it('Should equal false', () => {
      const output = isSubsequence('blue', 'the sky is red');
      expect(output).to.be.false;
    });
  });
});


describe('Sliding Windows Pattern', () => {
  describe('Max sub array sum', () => {
    it('Should equal 8', () => {
      const output = maxSubarraySum([1, 2, 6, 1, 6], 2);
      expect(output).to.be.equal(8);
    });
    it('Should equal null', () => {
      const output = maxSubarraySum([], 2);
      expect(output).to.be.equal(null);
    });
    it('Should equal null', () => {
      const output = maxSubarraySum([1, 4, 5], 4);
      expect(output).to.be.equal(null);
    });
  });

  describe('Min Sub array length', () => {
    it('Should equal 2', () => {
      const output = minSubArrayLen([8, 3, 5, 1, 10, 3], 20);
      expect(output).to.be.equal(3);
    });
    it('Should equal 0', () => {
      const output = minSubArrayLen([8, 3, 5, 1, 10, 3], 90);
      expect(output).to.be.equal(0);
    });
    it('Should equal 1', () => {
      const output = minSubArrayLen([8, 3, 5, 1, 10, 3], 10);
      expect(output).to.be.equal(1);
    });
  });

  describe('Find longest substring', () => {
    it('Should equal 3', () => {
      const output = findLongestSubstring('abccd');
      expect(output).to.be.equal(3);
    });
    it('Should equal 5', () => {
      const output = findLongestSubstring('abdeteserr');
      expect(output).to.be.equal(5);
    });
    it('Should equal 5', () => {
      const output = findLongestSubstring('abeebswerr');
      expect(output).to.be.equal(5);
    });
    it('Should equal 7', () => {
      const output = findLongestSubstring('thecatinthehat');
      expect(output).to.be.equal(7);
    });
  });
});
