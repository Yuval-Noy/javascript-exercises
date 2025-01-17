const reverseString = function(string) {
    let word = string.split(''); // Split the word into array of characters
    let reverseWord = word.reverse(); // Reverse the array
    let joinWord = reverseWord.join(''); // Join the array into a new string
    return joinWord;
};

// Do not edit below this line
module.exports = reverseString;
