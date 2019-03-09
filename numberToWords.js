const th = ['', 'thousand', 'million', 'billion', 'trillion'];
const dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tn = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const numberToEnglish = (valueToConvert) => {
  let valueString = valueToConvert.toString().replace(/[\, ]/g, '');
  // throw an error if the value passed is not a number
  if (valueString != parseFloat(valueString)) throw new Error('This is not a number!');
  let lengthNumber = valueString.indexOf('.');
  let finalString = '';
  if (lengthNumber === -1) lengthNumber = valueString.length;
  const arrayDigits = valueString.split('');
  if (lengthNumber > 17) {
    finalString += arrayDigits[0] === '-' ? 'negative infinity' : 'infinity';
  } else if (valueString == Number.NEGATIVE_INFINITY) {
    finalString = 'negative infinity';
  } else if (valueString == Number.POSITIVE_INFINITY) {
    finalString = 'infinity';
  } else {
    // detect negative numbers
    if (arrayDigits[0] === '-') {
      valueString = valueString.substring(1);
      lengthNumber -= 1;
      arrayDigits.splice(0, 1);
      finalString += 'negative ';
    }
    let sk = 0;
    if (lengthNumber < 2 && arrayDigits[0] == 0) {
      finalString += 'zero ';
    } else {
      for (let i = 0; i < lengthNumber; i++) {
        if ((lengthNumber - i) % 3 == 2) {
          if (arrayDigits[i] == '1') {
            finalString += `${tn[Number(arrayDigits[i + 1])]} `;
            i++;
            sk = 1;
          } else if (arrayDigits[i] != 0) {
            finalString += `${tw[arrayDigits[i] - 2]}${arrayDigits[i + 1] != 0 ? '-' : ' '}`;
            sk = 1;
          }
        } else if (arrayDigits[i] != 0) {
          finalString += `${dg[arrayDigits[i]]} `;
          if ((lengthNumber - i) % 3 == 0) finalString += `${(arrayDigits[i + 1] != 0) || (arrayDigits[i + 2] != 0) ? 'hundred and ' : 'hundred '}`;
          sk = 1;
        }
        if ((lengthNumber - i) % 3 == 1) {
          if (sk) {
            finalString += `${th[(lengthNumber - i - 1) / 3]}`;
            if ((lengthNumber - i - 1) / 3 !== 0) {
              const lastTwoDigits = arrayDigits.slice(lengthNumber - 2, lengthNumber);
              const otherDigits = arrayDigits.slice(i + 1, lengthNumber - 2);
              if (otherDigits.some(value => value != 0)) {
                finalString += ' ';
              } else if (lastTwoDigits.some(value => value != 0)) {
                finalString += ' and ';
              } else {
                finalString += ' ';
              }
            } else {
              finalString += ' ';
            }
          }
          sk = 0;
        }
      }
    }

    if (lengthNumber != valueString.length) {
      const y = valueString.length;
      finalString = `${finalString.trim()} point`;
      // take the decimal part
      const decimalString = valueString.substring(lengthNumber + 1);
      // convert the decimals into an array
      const arrayDigitsDecimals = decimalString.split('');
      arrayDigitsDecimals.forEach((decimal) => {
        finalString += ` ${dg[parseInt(decimal, 10)]}`;
      });
    }
  }
  return finalString.trim();
};

module.exports = { numberToEnglish };
