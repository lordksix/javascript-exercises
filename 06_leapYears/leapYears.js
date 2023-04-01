const leapYears = function(yearToSolve) {
    if(yearToSolve%400 === 0) return true
    else if(yearToSolve%100 === 0) return false;
    else if (yearToSolve%4 === 0) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
 