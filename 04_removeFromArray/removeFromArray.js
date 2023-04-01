const removeFromArray = function() {
    arrayToModify = arguments[0];
    for (let index = 1; index < arguments.length; index++) {
        const elementToRemove = arguments[index];
        let indexArray = arrayToModify.indexOf(elementToRemove);
        while(indexArray !== -1){
            arrayToModify.splice(indexArray,1);
            indexArray = arrayToModify.indexOf(elementToRemove);
        }
    }
    return arrayToModify
};

// Do not edit below this line
module.exports = removeFromArray;
 