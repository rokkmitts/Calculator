//
//
// ARITHMETIC FUNCTIONS BELOW
//
// Addition function to return the sum of inputs regardless of their length
const add = function (input) {
  const sum = input.reduce(function (total, num) {
    total += num;
    return total;
  }, 0);
  return sum;
};
//
//
// Subtraction function to return the difference between the inputs left to right
const subtract = function (input) {
  const difference = input.reduce(function (num1, num2) {
    return num1 - num2;
  });
  return difference;
};
//
//
// Multiplication function that returns the product of the numbers recieved
const multiply = function (input) {
  const product = input.reduce(function (num1, num2) {
    return num1 * num2;
  });
  return product;
};
//
//
// Divide function that returns the quotient of the numbers recieved
const divide = function (input) {
  const quotient = input.reduce(function (num1, num2) {
    return num1 / num2;
  });
  return quotient;
};
//
//
// LINKS THIS PAGE TO THE TESTING FILE
module.exports = { add, subtract, multiply, divide };
//ARITHMETIC FUNCTION ABOVE
//
//

// VARIABLES TO COLLECT EQUATIONS
const number1 = document.querySelector("");
const operator = document.querySelector("");
const number2 = document.querySelector("");
