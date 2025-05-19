function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  const input = display.value;
  const operator = input.match(/[\+\-\*\/]/);
  if (!operator) {
    return;
  }
  const [num1, num2] = input.split(operator[0]).map(Number);

  if (isNaN(num1) || isNaN(num2)) {
    display.value = "";
    return;
  }

  let result;
  switch (operator[0]) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        display.value = "Division by zero is not allowed";
        return;
      }
      result = num1 / num2;
      break;
  }
  display.value = result;
}
