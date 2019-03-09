const assert = require('assert');
const {
  numberToEnglish,
} = require('../numberToWords.js');

describe('Test Convert Numbers', () => {
  context('With simple numbers', () => {
    it('Return zero for 0', () => {
      assert.equal(numberToEnglish(0), 'zero', '0 => zero');
    });
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
  context('With numbers in strings', () => {
    it('Return six for "6"', () => {
      assert.equal(numberToEnglish('6'), 'six', '"6" -> six');
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
  context('With millions', () => {
    it('Return one million for 1000000', () => {
      assert.equal(numberToEnglish(1000000), 'one million', '1000000 -> one million');
    });
    it('Return one million and one for 1000001', () => {
      assert.equal(numberToEnglish(1000001), 'one million and one', '1000001 -> one million and one');
    });
    it('Return one million eleven thousand and eleven for 1011011', () => {
      assert.equal(numberToEnglish(1011011), 'one million eleven thousand and eleven', '1011011 -> one million eleven thousand and eleven');
    });
    it('Return one million one hundred and one thousand one hundred and one for 1101101', () => {
      assert.equal(numberToEnglish(1101101), 'one million one hundred and one thousand one hundred and one', '1101101 -> one million one hundred and one thousand one hundred and one');
    });
    it('Return one hundred million twenty-three thousand nine hundred and ninety-nine for 100023999', () => {
      assert.equal(numberToEnglish(100023999), 'one hundred million twenty-three thousand nine hundred and ninety-nine', '100023999 -> one hundred million twenty-three thousand nine hundred and ninety-nine');
    });
  });
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

  context('With decimal numbers', () => {
    it('Return one point two three for 1.23', () => {
      assert.equal(numberToEnglish(1.23), 'one point two three', '1.23 => one point two three');
    });
    it('Return three point one four one five nine for 3.14159', () => {
      assert.equal(numberToEnglish(3.14159), 'three point one four one five nine', '3.14159 => three point one four one five nine');
    });
    it('Return zero point zero zero zero one for 0.0001', () => {
      assert.equal(numberToEnglish(0.0001), 'zero point zero zero zero one', '0.0001 => zero point zero zero zero one');
    });
  });
  context('With negative numbers', () => {
    it('Return negative forty-five for -45', () => {
      assert.equal(numberToEnglish(-45), 'negative forty-five', '-45 => negative forty-five');
    });
    it('Return negative fifty for -50', () => {
      assert.equal(numberToEnglish(-50), 'negative fifty', '-50 => negative fifty');
    });
    it('Return negative six million and six for -6000006', () => {
      assert.equal(numberToEnglish(-6000006), 'negative six million and six', '-6000006 => negative six million and six');
    });
    it('Return negative one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety-nine for -1234567899', () => {
      assert.equal(numberToEnglish(-1234567899), 'negative one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety-nine', '-1234567899 => negative one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety-nine');
    });
  });
  context('With negative and decimal numbers', () => {
    it('Return negative sixty-five thousand seven hundred and twenty-one point five five five three one for -65721.55531', () => {
      assert.equal(numberToEnglish(-65721.55531), 'negative sixty-five thousand seven hundred and twenty-one point five five five three one', '-65721.55531 => negative sixty-five thousand seven hundred and twenty-one point five five five three one');
    });
  });
});
