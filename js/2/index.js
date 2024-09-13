/* In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata. */

/* В этой Ката мы передаем число (n) в функцию. Ваш код определит, является ли переданное число четным (или нет). Функция должна возвращать либо true, либо false. Числа могут быть положительными или отрицательными, целыми или плавающими. В этом ката числа с плавающей запятой, десятичная часть которых не равна нулю, считаются НЕчетными. */

const testEven = (n) => n % 2 === 0;

console.log(testEven(0), 'true'); // true, "testEven for 0";
console.log(testEven(0.5), 'false'); // false, "testEven for 0.5";
console.log(testEven(1), 'false'); // false, "testEven for 1";
console.log(testEven(2), 'true'); // true, "testEven for 2";
console.log(testEven(-4), 'true'); // true, "testEven for 2";
