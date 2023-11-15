//ARITHMETIC FUNCTIONS BELOW //ARITHMETIC FUNCTIONS BELOW //ARITHMETIC FUNCTIONS BELOW //
//ARITHMETIC FUNCTIONS BELOW //ARITHMETIC FUNCTIONS BELOW //ARITHMETIC FUNCTIONS BELOW //
// Addition function to return the sum of inputs regardless of their length
const add = function (input) {
  const sum = input.reduce(function (total, num) {
    total += num;
    return total;
  }, 0);
  return sum;
};
// Subtraction function to return the difference between the inputs left to right
const subtract = function (input) {
  const difference = input.reduce(function (num1, num2) {
    return num1 - num2;
  });
  return difference;
};
// Multiplication function that returns the product of the numbers recieved
const multiply = function (input) {
  const product = input.reduce(function (num1, num2) {
    return num1 * num2;
  });
  return product;
};
// Division function that returns the quotient of the numbers recieved
const divide = function (input) {
  const quotient = input.reduce(function (num1, num2) {
    return num1 / num2;
  });
  return quotient;
};

//END OF ARITHMETIC FXS//END OF ARITHMETIC FXS//END OF ARITHMETIC FXS//
//END OF ARITHMETIC FXS//END OF ARITHMETIC FXS//END OF ARITHMETIC FXS//
/*
be mindful that every algorithmic function MUST receive its data as an array.
*/

// Variables for each equation constructor //
let operand1, operator, operand2;

// Variables for operator buttons //
const addBTn = document.querySelector(".btn-add");
const subtractBTn = document.querySelector(".btn-subtract");
const divideBTn = document.querySelector(".btn-divide");
const multiplyBTn = document.querySelector(".btn-multiply");

// Variable(s) for number buttons //
const numberBtns = Array.from(document.querySelectorAll(".numBtn"));
numberBtns.forEach((el) =>
  el.addEventListener("click", function () {
    console.log(`${this.value} clicked`);
  })
);

//
//
//
//
//
//
//
//
//
//
//
// CALCULATOR OPERATION VARIABLES // CALCULATOR OPERATION VARIABLES
// CALCULATOR OPERATION VARIABLES // CALCULATOR OPERATION VARIABLES

//
//
//
//
//
//
//
//
//
//
//
// DO NOT ADD CODE BELOW HERE
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// LINKS THIS PAGE TO THE TESTING js FILE
// module.exports = { add, subtract, multiply, divide };
