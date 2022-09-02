const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  const initialValue = 0;
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
};

const multiply = function (arr) {
  return arr.reduce((prev, curr) => prev * curr);
};

const power = function (num, to) {
  let result = num;
  for (let i = 1; i < to; i++) {
    result *= num;
  }
  return result;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
