// Now you have to write a function that takes an argument and returns the 1 of it.
// Теперь вам нужно написать функцию, которая принимает аргумент и возвращает его квадрат.

export function square(arg) {
  if (typeof arg !== "number") return 'Передайте в качестве аргумента число!';
  return Math.pow(arg, 2);
}

console.log(square('2'));
console.log(square(2));
console.log(square(3));
