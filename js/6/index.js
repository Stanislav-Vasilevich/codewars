/*
Панграмма — это предложение, которое содержит каждую букву алфавита хотя бы один раз. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, потому что в нем хотя бы один раз используются буквы A-Z (регистр не имеет значения). Дана строка, определить, является ли она панграммой. Верните True, если это так, False, если нет. Игнорируйте цифры и знаки препинания.
*/

function isPangram(string) {
  string = string.replace(/[^a-zа-яё]/gi, '');
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

  return alphabets.every(x => string.toLowerCase().includes(x))
}

console.log(isPangram("Cwm fjord bank glyphs vext quiz")); // true;
