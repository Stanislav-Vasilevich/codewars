/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string

Получив строку цифр, вы должны заменить любую цифру ниже 5 на "0", а любую цифру от 5 и выше - на "1". Верните результирующую строку.
Примечание: вводимые данные никогда не будут пустой строкой
*/

function fakeBin(x){
  let result = '';

  for (let i = 0; i < x.length; i++) {
    if(x[i] < 5) {
      result += 0;
    } else {
      result += 1;
    }
  }

  return result;
}

console.log('011011110000101010000011011' === fakeBin('366058562030849490134388085')); // '01011110001100111'
