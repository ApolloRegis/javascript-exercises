const reverseString = function(string) {
    let hldr = string.split("");
    let result =hldr.reverse().join('');
    let nwresult = "'"+result+"'";
    return nwresult;
};


// Do not edit below this line
module.exports = reverseString;
