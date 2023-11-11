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

// Divide function that returns the quotient of the numbers recieved
const divide = function (input) {
  const quotient = input.reduce(function (num1, num2) {
    return num1 / num2;
  });
  return quotient;
};

//END OF ARITHMETIC FXS//END OF ARITHMETIC FXS//END OF ARITHMETIC FXS//
//END OF ARITHMETIC FXS//END OF ARITHMETIC FXS//END OF ARITHMETIC FXS//

//
//
/*

*/
/*
HOW TO SECURE USER INPUT DATA?
ANSWER:
FOR FRONTEND ONLY PROJECTS where there are concerns about scripting attacks, a regex validation for version control can be sufficient protection
- Always use serverside validation on data requests and the data it recieves from users (this project has no backend)
- Remember that the frontend(HTML file) is sent to the backend(server) as a HTTP request.
...HTTP are relative to the browser the user is using. Older browsers convert inputs to text
- Frontend validation is only to improve the users experience and protect aganst accidental data input errors.
-Incompataible browsers may default to user input storage as text. Nothing client side is 'safe'.
- Always use either javascript or PHP to validate the control of the elements chosen in the HTML.
- AN optional use case; Instead of using REGEX the indexOf method can be used for each special character; 
IE; str.indexOf('+') !== -1 str.indexOf('#') !== -1 Etc.
Front
I had in mind something along the lines of: User input might get wrapped in a sort of wrapper that prevents code from using it in unsafe ways. That input might then need to be unwrapped in a particular way that makes it difficult for someone to UNKNOWINGLY do something unsafe with it. The code using it would need to ensure it was made safe for use in the context of that code before using it. Is there something like this that has been established? – 



NOTES:
UI/FrontEnd information doesnt need to be sanitized like backend information. 
*/

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
