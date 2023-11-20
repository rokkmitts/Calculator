// Variables for operator buttons //
const addBTn = document.querySelector(".btn-add");
const subtractBTn = document.querySelector(".btn-subtract");
const divideBTn = document.querySelector(".btn-divide");
const multiplyBTn = document.querySelector(".btn-multiply");

const inputField = document.querySelector("#inputValue");

// Variables for each equation constructor //
let operand1, operator, operand2;
//
//
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

/*BELOW IS THE DEEP FUNCTIONALITY OF THE PROGRAM*/

// Variable(s) for number buttons //
const numberBtns = Array.from(document.querySelectorAll(".numBtn"));
// click event for number buttons
numberBtns.forEach((el) =>
  el.addEventListener("click", function () {
    document.querySelector("#inputValue").value += `${this.value}`;
  })
);

// variable(s) for operator buttons
const operatorBtns = Array.from(document.querySelectorAll(".opBtn"));
//click event for operator buttons
operatorBtns.forEach((el) =>
  el.addEventListener("click", function () {
    console.log(`inital: ${operand1}`);
    operand1 = inputField.value;
    console.log(`set: ${operand1}`);
    inputField.value = "";

    operator = `${el.name} operator`;

    // switch (operator) {
    //   case (this.el = addBTn):
    //     operator = add();
    //     break;
    //   case subtractBTn:
    //     operator = subtract();
    //     break;
    //   case divideBTn:
    //     operator = divide();
    //     break;
    //   case multiplyBTn:
    //     operator = multiply();
    //     break;
    // }
    console.log(operator);
  })
);

// Operate function
/*
must take in the operator, operand1 and operand2 variables.
It must make a decision of which arithmic function to use based on the operator value.
*/
const operate = function () {};

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
