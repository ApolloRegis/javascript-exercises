const reverseString = function(parameter) {
    let hldr = parameter.split("");
    let result =hldr.reverse().join('');
    let nwresult = "'"+result+"'";
    console.log(nwresult);
};

reverseString("hello there")

// Do not edit below this line
module.exports = reverseString;
