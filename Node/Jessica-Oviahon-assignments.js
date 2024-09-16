// Assignment 1: Basic Math Operations
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

// Example usage of the calculate function:
console.log(calculate(10, 5, '+'));  // Output: 15
console.log(calculate(10, 5, '/'));  // Output: 2


// Assignment 2: Temperature Converter
function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Example usage of the convertToFahrenheit function:
console.log(convertToFahrenheit(0));   // Output: 32
console.log(convertToFahrenheit(25));  // Output: 77


// Assignment 3: Find the Maximum Number in an Array
function findMax(numbers) {
    let max = numbers[0];  // Assume the first number is the largest
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Example usage of the findMax function:
console.log(findMax([10, 5, 8, 12, 3]));  // Output: 12
console.log(findMax([-3, -1, -7, -4]));   // Output: -1
