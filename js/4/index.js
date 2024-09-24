/* Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string. */
/* Напишите функцию, которая принимает в качестве аргумента одну непустую строку, состоящую только из строчных и прописных букв ASCII (слова), и возвращает упорядоченный список, содержащий индексы всех заглавных (прописных) букв в строке. */

const capitals = (word) => {
  const arr = [];

  for(let i = 0; i < word.length; i++) {
    if(word[i] === word[i].toUpperCase()) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(capitals('CodEWaRs')); // [0, 3, 4, 6]
console.log(capitals('coDewarS')); // [2, 7]
