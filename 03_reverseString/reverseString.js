const reverseString = function(stringToReverse) {
    const chars = stringToReverse.split('');
    const charsReversed = chars.reverse();
    return charsReversed.join('');
};

// Do not edit below this line
module.exports = reverseString; 
