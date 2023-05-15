const fibonacci = function(num) {
    num = +num;
    if(num<0 || !Number.isInteger(num)) return "OOPS";
    if (num <= 1) return 1;
    let term1 = 0;
    let term2 = 1;
    let termTemp;
    for(let i = 2; i <= num; i++) {
      termTemp = term1 + term2;
      term1 = term2;
      term2 = termTemp;
    }
    return term2;
};

// Do not edit below this line
module.exports = fibonacci;
