const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
//  function encodeLine(str) {
//   return str.replace(/([a-z])\1*/g, (elem) => (elem.length > 1 ? elem.length + elem[0] : elem[0]));
// }
// console.log(encodeLine('aabbbc'))



const encodeLine = function(str) {
  // function encodeLine(str) {
    let count = 1;    
    let result = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i+1]) {
            count += 1;
        } else {
            result += count+str[i];
            count = 1;
        }
    }
    return result.replace(/1/g, '');
  }
  console.log(encodeLine('aabbbc')) 


module.exports = {
  encodeLine
};
