const fibonacci = function(num) {
    if (typeof num === 'string') { 
        num = parseInt(num); 
    };
        
    if (num < 0) { 
        return "OOPS";
    };

    let sequence = [0, 1];

    for (let i = 2; i <= num; i++) { 
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    };

    return sequence[num];

};

//console.log(fibonacci(15));

// Do not edit below this line
module.exports = fibonacci;
