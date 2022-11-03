/**
 * Create an object "myDog" that represents a dog. It should contain the properties:
 * @property {string} name
 * @property {string} breed
 * @property {number} age
 * @property {array} owners (array of strings)
 * Each should have a value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const myDog = ({name, breed, age, owners}) => {
  console.log(name, breed, age, owners);
}
myDog({name: "Bob", breed: "Mutt", age: 2, owners: ["Sunny", "Swipes"]})