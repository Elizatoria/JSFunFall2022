/**
 * Check to see if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Use the split and join methods to solve this problem.
 * @param  {string}  string
 * @returns {boolean} true is a string is a palindrome, false if it is not.
 * @example isPalindrome("eye"); // true
 * @example isPalindrome("nope"); // false
 */

 const isPalindrome = (string) => {
  // WRITE YOUR ANSWER HERE
  const len = string.length;  
  for (let i = 0; i < len / 2; i++) {  
    if (string[i] !== string[len - 1 - i]) {  
        console.log( 'It is not a palindrome');  
    }  
}  
console.log('It is a palindrome');
};
string("madam");

or 

const isPalindrome = (string) => {
  // WRITE YOUR ANSWER HERE
  var rev = /[^A-Za-z0-9]/g;
  string = string.toLowerCase().replace(rev, '');
  var len = string.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;

};
 // Solution 1: for ... of loop
 let letters = string.split("");
 let reverse = "";
 for (let letter of letters) {
   reverse = letter + reverse;
 }
 if (reverse === string) {
   return true;
 }
 return false;

 // Solution 2: reverse
 const reverse = string.split("").reverse().join("");
 return reverse === string;

string("madam");
console.log(isPalindrome);

// IGNORE THIS BELOW. It is for the tests.

export default isPalindrome;
