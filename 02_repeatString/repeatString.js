const repeatString = function(stringToRepeat, timesToRepeat) {
    if(timesToRepeat<0) return "ERROR";
    else if (timesToRepeat === 0) return "";
    else return stringToRepeat.repeat(timesToRepeat);
};

// Do not edit below this line
module.exports = repeatString;
 