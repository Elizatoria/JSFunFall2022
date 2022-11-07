/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param {array} numbers array of numbers
 * @returns {number} the highest number that was in the array
 *
 * @example highestNumber([1, 10, 2, 3, 4]) // 10
 * @example highestNumber([-1, -5, -4]) // -1
 *
 */

 const highestNumber = (numbers) => {
  // WRITE YOUR ANSWER HERE
  let max = numbers[0];
for (let i = 1; i < numbers.length; ++i) {
  if (numbers[i] > max) {
  max = numbers[i];
  }
};
}
highestNumber([1, 10, 2, 3, 4]);


 const highestNumber = (numbers) => {
  // WRITE YOUR ANSWER HERE
for (let i = 0; i < numbers.length; i++) {
  let high = Math.max(...numbers);
  console.log(high);
  }
};

// Solution 1: For loop
let highest;
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (num > highest || highest === undefined) highest = num;
}
return highest;

// Solution 2: For ... of loop
let highest;
for (let num of numbers) {
  if (num > highest || highest === undefined) highest = num;
}
return highest;

// Solution 3
return Math.max(...numbers);

highestNumber([1, 10, 2, 3, 4]);

// IGNORE THIS BELOW. It is for the tests.

export default highestNumber;
