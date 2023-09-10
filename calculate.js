// add two numbers
function add(a, b) {
    return a + b;
  }
  
  // subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  //  multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // divide two numbers
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  
  // perform calculation based on operator
  function calculate(a, b, operator) {
    switch (operator) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
      default:
        return "Invalid operator";
    }
  }
  
  // Example:
  const num1 = 10;
  const num2 = 5;
  const operator = "+";
  const result = calculate(num1, num2, operator);
  console.log(`Result: ${result}`);
  