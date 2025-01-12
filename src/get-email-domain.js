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

//  function getEmailDomain(email) {
  
//   let result = [];
//   email.forEach(mail => {
//     let domain = mail.substr(mail.lastIndexOf('@') + 1);
//     if (result.indexOf(domain) == -1)
//     result.push(domain);
//   });
//   return result;
// }


// let email = ['prettyandsimple@example.com']
// console.log(getEmailDomain(email))



const  getEmailDomain = function(email) {
  return email.substr(email.lastIndexOf("@") + 1, email.length) ;
}

// function getEmailDomain(email) {
//   // return email.substr(email.indexOf("@") + 1, email.length) ;
//   return;
// }

console.log(getEmailDomain('prettyahbjhbkjkbkndsimple@exankknkmple.com'))

module.exports = {
  getEmailDomain
};