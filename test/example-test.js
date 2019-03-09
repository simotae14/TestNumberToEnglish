const assert = require('assert');
const {
  numberToEnglish,
} = require('../numberToWords.js');

describe('Test Big Numbers', () => {
  context('With big numbers', () => {
    it('Return negative infinity for a negative infinite number', () => {
      assert.equal(numberToEnglish(Number.NEGATIVE_INFINITY), 'negative infinity');
    });
    it('Return infinity for a infinite number', () => {
      assert.equal(numberToEnglish(Number.POSITIVE_INFINITY), 'infinity');
    });
  });
  context('With no numbers', () => {
    it('NaN should throw error', () => {
      assert.throws(
        () => {
          numberToEnglish(NaN);
        },
        Error,
        'This is not a number!',
      );
    });
    it('A string should throw error', () => {
      assert.throws(
        () => {
          numberToEnglish('ehy');
        },
        Error,
        'This is not a number!',
      );
    });
  });
  context('With simple numbers', () => {
    it('Return one for 1', () => {
      assert.equal(numberToEnglish(1), 'one', '1 => one');
    });
    it('Return five for 5', () => {
      assert.equal(numberToEnglish(5), 'five', '5 => five');
    });
    it('Return ten for 10', () => {
      assert.equal(numberToEnglish(10), 'ten', '10 -> ten');
    });
    it('Return eleven for 11', () => {
      assert.equal(numberToEnglish(11), 'eleven', '11 => eleven');
    });
    it('Return twelve for 12', () => {
      assert.equal(numberToEnglish(12), 'twelve', '12 -> twelve');
    });
    it('Return eighteen for 18', () => {
      assert.equal(numberToEnglish(18), 'eighteen', '18 -> eighteen');
    });
    it('Return twenty for 20', () => {
      assert.equal(numberToEnglish(20), 'twenty', '20 -> twenty');
    });
  });
  context('With decimal numbers', () => {
    it('Return one point two three for 1.23', () => {
      assert.equal(numberToEnglish(1.23), 'one point two three', '1.23 => one point two three');
    });
  });
  context('With negative numbers', () => {
    it('Return negative forty-five for -45', () => {
      assert.equal(numberToEnglish(-45), 'negative forty-five', '-45 => negative forty-five');
    });
  });
  context('With hundreds numbers', () => {
    it('Return one hundred million twenty-three thousand nine hundred and ninety-nine for 100023999', () => {
      assert.equal(numberToEnglish(100023999), 'one hundred million twenty-three thousand nine hundred and ninety-nine', '100023999 => negative forty-five');
    });
  });
  context('With thousands numbers', () => {
    it('Return nineteen thousand for 19000', () => {
      assert.equal(numberToEnglish(19000), 'nineteen thousand', '19000 -> nineteen thousand');
    });
  });
  context('With thousands and hundreds numbers', () => {
    it('Return three hundred and nineteen thousand for 319000', () => {
      assert.equal(numberToEnglish(319000), 'three hundred and nineteen thousand', '319000 -> three hundred and nineteen thousand');
    });
  });
});
