const convertToCelsius = function(num) {
  let nwnum = (num-32)/1.8;

  return nwnum.toFixed(1); 
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
