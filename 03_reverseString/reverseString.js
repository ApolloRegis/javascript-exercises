const reverseString = function(parameter) {
    let hldr = parameter.split("");
    let result =hldr.reverse().join('');
    let nwresult = "'"+result+"'";
    return nwresult;
};

reverseString()

// Do not edit below this line
module.exports = reverseString;
