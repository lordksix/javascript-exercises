const convertToCelsius = function(fahrenheitTemp, precision = 1) {

  let multiplier = Math.pow(10, precision || 0);
  let result = (fahrenheitTemp-32)*5/9;

  return Math.round(result*multiplier)/multiplier;
};

const convertToFahrenheit = function(celciusTemp, precision = 1) {

  let result = (celciusTemp*9/5 +32);
  let multiplier = Math.pow(10, precision || 0);

  return Math.round(result*multiplier)/multiplier;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
 