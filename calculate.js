let displayValue = '';

// append a value to the display
function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

// clear the display
function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

// calculate the result
function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}
