const sumAll = function(startNumber, endNumber) {
    if(startNumber<0 || endNumber<0 || !Number.isInteger(startNumber) || !Number.isInteger(endNumber)){
        return 'ERROR';
    }
    if (startNumber === endNumber) return 0;
    let result = 0;
    for (let index = Math.min(startNumber,endNumber); index <= Math.max(startNumber,endNumber); index++) {
        result += index;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
 