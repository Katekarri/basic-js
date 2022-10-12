const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(/* email */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};


// function getEmailDomain(email) {
//   return email.substr(email.indexOf("@") + 1, email.length) ;
// }

// console.log(getEmailDomain('prettyahbjhbkjkbkndsimple@exankknkmple.com'))