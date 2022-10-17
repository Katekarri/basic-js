const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
// function isMAC48Address(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

// const av678 = /'[0-9]'/;

// const av6098 = '[0-9]';

// ^a-c [a].*[^c|d]
//https://proglib.io/p/regex-for-beginners


// ищем уникальный индентифик. матплаты устройства
//$ заканчивает регулярное выражение 
function isMAC48Address(n) {
  return /^[0-9A-F]{2}(?:-[0-9A-F]{2}){5}$/.test(n);//тест - удовлетворяет ли строка регулярному выражению
}

module.exports = {
  isMAC48Address
};


// [1, 2].join('-');
// '1-2-3'.split('-');