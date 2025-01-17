const sumAll = function(num1, num2) {
    let sum = 0, temp = 0;

    // Check if both arguments are integers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';

    // Check if both arguments are positive numbers
    if (num1 < 0 || num2 < 0) return 'ERROR';

    // Check if num1 is greater than num2
    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

    // Calculate the sum of all numbers between num1 and num2
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
