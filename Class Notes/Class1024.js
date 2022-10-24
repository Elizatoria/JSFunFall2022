//Example One
const greeting = (faction, name) => {
  console.log(`Hello ${faction} ${name}`);
}

greeting("Decepticon", "Starscream");


//Example Two
const add = (num1, num2) => {
  console.log(num1 + num2);
}

add(4, 5);


//Example Three
// Total divided by 4 people
// Calculate the tip
// Function called splitBill
const splitBill = (totalForEveryone) => {
  return totalForEveryone / 4;
};
let result = splitBill(100);
console.log(result);
// Function called calculate tip
const calculateTip = (totalForOnePerson, tip) => {
  console.log(totalForOnePerson * tip + totalForOnePerson);
};
calculateTip(result, 0.2);


//Example Four
const multiplyTen = (num) => {
  return 10 * num;
};
let answer = multiplyTen(10); // 100
// Continue working with the result from multiplyTen
console.log(answer);


//Example Five
const adding = (num1, num2) => {
  return num1 + num2;
}

let ans = adding(4, 5);
console.log(ans):