const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || isNaN(num1) || num1<0){
        return "ERROR";
      } if (typeof num2 !== 'number' || isNaN(num2) || num2<0) {
        return "ERROR";
      } else {
        
        let big = Math.max(num1, num2);
        let small = Math.min(num1, num2);
        let sum = big;
      
        for (let i = small; i<big; i++){
            sum += i;
        };
      
        return(sum);
      };
  };

// Do not edit below this line
module.exports = sumAll;
