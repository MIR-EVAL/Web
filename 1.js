const degrees_celsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
const degrees_fahrenheit = Math.round((9/5)* degrees_celsius + 32);

alert(`Цельсий: ${degrees_celsius}, Фаренгейт: ${degrees_fahrenheit}`);
