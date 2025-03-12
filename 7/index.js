/*
Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]

Создайте функцию, которая принимает параметр, представляющий имя, и возвращает сообщение: "Привет, <имя> как у тебя дела сегодня?".
[Убедитесь, что вы вводите именно то, что я написал, иначе программа может не сработать должным образом]
*/

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet('Ryan')); // "Hello, Ryan how are you doing today?";
console.log(greet('Shingles')); // "Hello, Shingles how are you doing today?";
