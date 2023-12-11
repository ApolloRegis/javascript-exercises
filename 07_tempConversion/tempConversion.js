const convertToCelsius = function(num) {
  let nwnum = (num-32)/1.8;

  return nwnum.toFixed(1); 
};

const convertToFahrenheit = function(num) {
  let nwnum = (num*1.8)+32;

  return nwnum.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
