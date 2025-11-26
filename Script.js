const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const operation = document.getElementById('operation');
const calcBtn = document.getElementById('calcBtn');
const output = document.getElementById('output');

calcBtn.addEventListener('click', () => {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  let result = 0;

  switch (operation.value) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
  }

  output.textContent = result;
});
