const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
  return array.reduce(add, 0)
};

const multiply = function(array) {
  return array.reduce((product, currentItem) => {
    return product * currentItem
  })
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
  let res = 1
	for (let i=1; i <= n; i ++){
    res *= i
  }
  return res
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
