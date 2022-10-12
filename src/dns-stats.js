const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru',
 *  'tut.by',
 *  'afisha.tut.by'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 *   '.by': 2,
 *   '.tut.by': 2,
 *   '.afisha.tut.by': 1
 * }
 *
 */
function getDNSStats(/* domains */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};



// function getDNSStats(domains) {
//   const obj = Object.assign({}, domains);
//   console.log(obj)
    
//   }
//   getDNSStats([
//      'code.yandex.ru',
//      'music.yandex.ru',
//      'yandex.ru'
//     ]);