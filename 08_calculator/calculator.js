const add = function(a, b) {
  return a + b;
};

console.log(add(3,3))

const subtract = function(a, b) {
  return a - b;	
};

console.log(subtract(3, 3));

const sum = function(array) {
  let sub = 0;
  for(let i = 0; i < array.length; i++) {
    sub += array[i];
  };
  return sub;
};

//mtyarray = [];

//const sumofmtyarray = sum(mtyarray);

console.log(sum([7]));

const multiply = function(array2) {
  let sub = 1;
  for(let i = 0; i < array2.length; i++) {
    sub *= array2[i];
  };
  return sub;
};

console.log(multiply([3,3,3]))

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

console.log(power(3,3));

const factorial = function(num) {
  let result = 1; 
  for(let i = 1; i <= num; i++) { 
    result *= i; 
  }; 
  return result;
};

console.log(factorial(3));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
