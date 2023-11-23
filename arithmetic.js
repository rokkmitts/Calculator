// Variables for each equation constructor //
let operand1, operand2, operator;
//
//
//Variable for inputField
const inputField = document.querySelector("#inputValue");
//
// array collecting number buttons //
const numberBtns = Array.from(document.querySelectorAll(".numBtn"));
// array collecting operator buttons //
const operatorBtns = Array.from(document.querySelectorAll(".opBtn"));
//
// click eventlisteners on every number buttons //
numberBtns.forEach((el) =>
  el.addEventListener("click", function () {
    document.querySelector("#inputValue").value += `${this.value}`;
  })
);
//
//  click eventlisteners on every operator button //
operatorBtns.forEach((el) =>
  el.addEventListener("click", function () {
    let opName = `${el.name}`;
    starter(opName);
  })
);
//
// Function for operation construction
function operateSwitch(opName) {
  switch (opName) {
    case "add":
      return add([operand1, operand2]); /* sum */
      break;
    case "subtract":
      return subtract([operand1, operand2]); /* difference */
      break;
    case "divide":
      return divide([operand1, operand2]); /* quotient */
      break;
    case "multiply":
      return multiply([operand1, operand2]); /* product */
      break;
  }
}
//
// Function for inital operator analysis
const starter = function (opName) {
  if (!operand1 && inputField.value) {
    operator = opName;
    operand1 = Number(inputField.value);
    inputField.value = "";
  }

  if (operand1 && inputField.value) {
    operand2 = Number(inputField.value);
    const ans = operateSwitch(opName);

    operand1 = ans;
    inputField.value = ans;
  }
};
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
// ARITHMETIC FUNCTIONS
//add function
const add = function (input) {
  const sum = input.reduce(function (total, num) {
    total += num;
    return total;
  });
  console.log(`sum: ${sum}`);
  return sum;
};
//
//subtract function
const subtract = function (input) {
  const difference = input.reduce(function (num1, num2) {
    return num1 - num2;
  });
  console.log(`difference: ${difference}`);
  return difference;
};
//
//mupltiply function
const multiply = function (input) {
  const product = input.reduce(function (num1, num2) {
    return num1 * num2;
  });
  console.log(`product: ${product}`);
  return product;
};
//
// divide function
const divide = function (input) {
  const quotient = input.reduce(function (num1, num2) {
    return num1 / num2;
  });
  console.log(`quotient: ${quotient}`);
  return quotient;
};
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
// module.exports = { add, subtract, multiply, divide };
