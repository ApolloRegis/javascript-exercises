const removeFromArray = function(array,...num) {
    let hldr = array.filter(item => !num.includes(item));

    return hldr;
};

// Do not edit below this line
module.exports = removeFromArray;
