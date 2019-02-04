var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

const {
  linearSearch,
} = require('../algorithms/search');

describe('Search Algorithms', () => {
  describe('Linear Search', () => {
    it('Should be equal to 2', () => {
      const output = linearSearch([10, 234, 432, 123, 6543, 234, 5], 432);
      expect(output).to.be.equal(2);
    });
    it('Should be equal to -1', () => {
      const output = linearSearch(['British Columbia', 'Alberta', 'Ontario'], 'California');
      expect(output).to.be.equal(-1);
    });
  });
});