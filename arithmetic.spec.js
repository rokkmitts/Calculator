const arithmetic = require("./arithmetic");

describe("add", () => {
  //
  //
  test("Adds a negative and positive integer", () => {
    expect(arithmetic.add([1, 2])).toBe(3);
  });
  //
  //
  test("Adds two negatives integers", () => {
    expect(arithmetic.add([-1, -1])).toBe(-2);
  });
  //
  //
  test("subtracts positive integers from another", () => {
    expect(arithmetic.subtract([10, 1])).toBe(9);
  });
  //
  //
  test("subtracts negative integers from another", () => {
    expect(arithmetic.subtract([-1, -1])).toBe(0);
  });
  //
  //
  test("mulitplies positive numbers", () => {
    expect(arithmetic.multiply([25, 2])).toBe(50);
  });
  //
  //
  test("multiplies negative numbers", () => {
    expect(arithmetic.multiply([-100, 10])).toBe(-1000);
  });
  //
  //
  test("divides positive numbers", () => {
    expect(arithmetic.divide([4, 2])).toBe(2);
  });
  //
  //
  test("divides whole numbers by a negative divisor ", () => {
    expect(arithmetic.divide([1000, -10])).toBe(-100);
  });
});
