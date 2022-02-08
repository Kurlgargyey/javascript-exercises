const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	result = arr.reduce((total, num) => {
    total += num;
    return total;
  }, 0);
  return result;
};

const multiply = function(arr) {
  result = arr.reduce((total, num) => {
    total *= num;
    return total;
  }, 1);
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	start = 1;
  total = 1;
  while (start <= num) {
    total *= start;
    start ++;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
