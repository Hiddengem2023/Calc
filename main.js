//cretimg a variable for each button//
const numberButtons = document.querySelectorAll('#num button');
const operatorButtons = document.querySelectorAll('#operator button');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const output = document.getElementById('output');
//adding event Lister to each button//
numberButtons.forEach(button => {
  button.addEventListener('click', function() {
    const digit = this.textContent;
    output.value += digit;
  });
});
operatorButtons.forEach(button => {
  button.addEventListener('click', function() {
    const operator = this.textContent;
    const currentValue = output.value;
    // remove the last character
    const kalkulation = `${currentValue} ${operator} `;
    output.value = kalkulation;
  });
});
//adding functions to operator button//
equalsButton.addEventListener('click', function() {
  const expression = output.value;
  if (expression.includes('+') || expression.includes('-') || expression.includes('*') || expression.includes('/')) {
    const result = eval(expression);
    output.value = result;
  }
});
//adding function to clear button//
clearButton.addEventListener('click', function() {
  output.value = '';
});