const palindromes = function (string) {
    let str = "asdfsdf";
    str.toLowerCase
    let newStr = string.toLowerCase().replace(/[^a-z]+/g,'');
    let length = newStr.length;
    let itirator = Math.floor(length/2);
    for(let i = 0; i<=itirator;i++){      
        if(!(newStr [i] === newStr[length-1-i])) return false;
    }
    return true;
};
//console.log(i,newStr [i],newStr[length-1-i]);
// Do not edit below this line
module.exports = palindromes;
