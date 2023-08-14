const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // setup
      const expected = 'cock-a-doodle-doo!';
      // exercise
      const check = Rooster.announceDawn();
      // verify
      assert.equal(check, expected);
    });
  });
  describe('timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // setup
      const input = 12;
      const expected = '12';
      // exercise
      const actual = Rooster.timeAtDawn(input);
      // verify
      assert.equal(actual, expected);
    });
    it('throws an error if passed a number less than 0', () => {
      // setup
      const input = -5;
      const expected = RangeError;
      
      // verify
      assert.throws(
        () => {
          Rooster.timeAtDawn(input); // exercise is actually here when using a throw assertion.
      }, expected);
    });
    it ('throws an error if passed a number greater than 23', () => {
      // setup
      const input = 25;
      const expected = RangeError;

      // exercise & verify
      assert.throws(
        () => {
          Rooster.timeAtDawn(input); // exercise is actually here when using a throw assertion.
      }, expected);
    });
  });
});
