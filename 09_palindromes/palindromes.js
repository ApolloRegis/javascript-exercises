const palindromes = function (string) {
    let basicString = string.toLowerCase().replace(/[^a-z]/g, "");
    let revStr = basicString.split("").reverse().join("");

    if(basicString === revStr) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;
