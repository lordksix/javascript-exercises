const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  return array.reduce((total, element) => total + element,0);
};

const multiply = function(array) {
  if (array.length<1) return "ERROR";
  return array.reduce((total, element) => total*element,1);
};

const power = function(a,b) {
  if(!Number.isInteger(b) || (a === 0 && b === 0)) return "ERROR";
  if (a === 0 || a === 1) return a;
  let total = 1;
	for (let index = 0; index < b; index++) {    
    total *=a;
  }
  return total;
};

const factorial = function(a) {
	if(!Number.isInteger(a)) return "ERROR";
  if(a === 0 || a === 1) return 1;
  let total = 1;
  for (let index = 1; index <= a; index++) {    
    total *=index;
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
