const convertToCelsius = function(num) {
  let nwnum = (num-32)/1.8;

  if ((Math.round(nwnum*10)/10) % 1 === 0) {
    return parseFloat(nwnum.toFixed(0));
  } else {
    return parseFloat(nwnum.toFixed(1));
  }; 
};

const convertToFahrenheit = function(num) {
  let nwnum = (num*1.8)+32;

  if ((Math.round(nwnum*10)/10) % 1 === 0) {
    return parseFloat(nwnum.toFixed(0));
  } else {
    return parseFloat(nwnum.toFixed(1));
  };
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
