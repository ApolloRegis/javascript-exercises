const repeatString = function(string, num) {
    if (num<0) return "ERROR"
    let inpt = ''
    for (i=num;i>0;i--){
        inpt += string
    }
    return(inpt)
};
repeatString('hey', 3)


// Do not edit below this line
module.exports = repeatString;
