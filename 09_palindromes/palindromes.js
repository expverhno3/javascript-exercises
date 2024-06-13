const palindromes = function (s) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = s.toLowerCase().split('').filter((char) => alphanumerical.includes(char)).join('')
    const reversedString = cleanedString.split('').reverse().join('')
    return cleanedString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
