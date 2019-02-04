var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

const {
  reverse,
} = require('../algorithms/recursion');

describe('RECURSION: ', () => {
  describe('Reverse string', () => {
    it('Should be reverse of awesome', () => {
      const output = reverse('awesome');
      expect(output).to.be.equal('emosewa');
    });
    it('Should be reverse of awesome', () => {
      const output = reverse('rithmschool');
      expect(output).to.be.equal('loohcsmhtir');
    });
  });
});