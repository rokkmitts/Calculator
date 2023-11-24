// Variables for each equation constructor //
let operand1, operand2, operator, btnName;
//
//
//Variable for calculator windows
const inputField = document.querySelector("#inputValue");
const outPutField = document.querySelector("#resultValue");
//
// variable for clear button
const clearAllBtn = document.querySelector("#btn-clear");
//  variable for equal button
const equalsBtn = document.querySelector("#btn-equotient");
// variable targeting change on inputField.value
const pos_neg = document.querySelector("#signBtn");
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
operatorBtns.forEach((elBtn) =>
  elBtn.addEventListener("click", function () {
    btnName = elBtn.name;
    if (!operator) {
      operator = btnName;
    }
    operationSetter(btnName);
  })
);
//BUG
// Function for inital operator analysis
const operationSetter = function (btnName) {
  if (outPutField.value) {
    operand1 = Number(outPutField.value);
  }

  if (inputField.value && !operand1) {
    operand1 = Number(inputField.value);
    inputField.value = "";
  } else if (inputField.value && !operand2) {
    operand2 = Number(inputField.value);
    inputField.value = "";
    outPutField.value = operatorSorter(operator);
    operator = "";
    operand1 = Number(outPutField.value);
  }
};
//
// Function for operation construction
function operatorSorter(operator) {
  switch (operator) {
    case "add":
      return add([operand1, operand2]);
      break;
    case "subtract":
      return subtract([operand1, operand2]);
      break;
    case "divide":
      return divide([operand1, operand2]);
      break;
    case "multiply":
      return multiply([operand1, operand2]);
      break;
  }
}
//
// event listener to clear all values constructed
clearAllBtn.addEventListener("click", function () {
  inputField.value = "";
  outPutField.value = "";
  operand1 = "";
  operator = "";
  operand2 = "";
  btnName = "";
});
//
// eventlistener to equate the values that have been are held in operand1 and operand2
equalsBtn.addEventListener("click", function () {
  if (inputField.value && operand1) {
    operand2 = Number(inputField.value);
    inputField.value = "";
    outPutField.value = Number(operatorSorter(operator));
    operand2 = "";
    operator = "";
    console.log(`equation: op1:${operand1}, oper:${operator}, op2:${operand2}`);
  }
});
//
// eventlistener for pos_neg button changes value of input
pos_neg.addEventListener("click", function () {
  console.log("+/- click");
});
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
// input value changer

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
