function calculate(op) {
  const num1 = document.getElementById("num1").value.trim();
  const num2 = document.getElementById("num2").value.trim();
  const resultEl = document.getElementById("result");

  // Перевірка на пусті значення
  if (num1 === "" || num2 === "") {
    resultEl.textContent = "Помилка: заповніть обидва поля!";
    return;
  }

  // Перевірка на коректні числа
  const a = Number(num1);
  const b = Number(num2);

  if (isNaN(a) || isNaN(b)) {
    resultEl.textContent = "Помилка: введіть коректні числа!";
    return;
  }

  let result;

  switch (op) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '/':
      if (b === 0) {
        resultEl.textContent = "Помилка: ділення на 0!";
        return;
      }
      result = a / b;
      break;
    case '*':
      result = a * b;
      break;
  }

  // Округлення до сотих, якщо є дроби
  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }

  resultEl.textContent = "Результат: " + result;
}
