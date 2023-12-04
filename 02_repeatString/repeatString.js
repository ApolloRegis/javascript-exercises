const repeatString = function(string, num) {
    let inpt = ''
    for (i=num;i>0;i--){
        inpt += string
    }
    return(inpt)
};
repeatString('hey', 3)


// Do not edit below this line
module.exports = repeatString;
