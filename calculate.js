document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let displayValue = '';
  
    // append a value to the display
    function appendToDisplay(value) {
      displayValue += value;
      display.value = displayValue;
    }
  
    // clear the display
    function clearDisplay() {
      displayValue = '';
      display.value = '';
    }
  
    // calculate the result
    function calculateResult() {
      try {
        const result = eval(displayValue);
        display.value = result;
        displayValue = result.toString();
      } catch (error) {
        display.value = 'Error';
        displayValue = '';
      }
    }
  
    // Add event listeners for the buttons
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        const buttonValue = button.textContent;
        if (buttonValue === '=') {
          calculateResult();
        } else if (buttonValue === 'C') {
          clearDisplay();
        } else {
          appendToDisplay(buttonValue);
        }
      });
    });
  
    // Allow keyboard input
    document.addEventListener('keydown', function (event) {
      if (/^[0-9+\-*/.C=]$/.test(event.key)) {
        if (event.key === 'C') {
          clearDisplay();
        } else if (event.key === '=') {
          calculateResult();
        } else {
          appendToDisplay(event.key);
        }
      }
    });
  });
  