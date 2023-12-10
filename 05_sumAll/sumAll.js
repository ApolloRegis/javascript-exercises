const sumAll = function(num1, num2) {
    let big = Math.max(num1, num2);
    let small = Math.min(num1, num2);
    let sum = big;

    for (let i = small; i<big; i++){
        sum += i;
        return sum;
    };
};

// Do not edit below this line
module.exports = sumAll;
