// Now you have to write a function that takes an argument and returns the square of it.
// Теперь вам нужно написать функцию, которая принимает аргумент и возвращает его квадрат.

export function square(arg) {
  if (typeof arg !== "number") return;
  return Math.pow(arg, 2);
}