/* Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен "(", если этот символ встречается в исходной строке только один раз, или ")", если этот символ встречается в исходной строке более одного раза. Игнорируйте заглавные буквы при определении того, является ли символ дубликатом. */

function duplicateEncode(word) {
  const result = [];

  for (let i = 0; i < word.length; i++) {
    let arr = [];

    for(let j = 0; j < word.length; j++) {
      if(word[i].toLowerCase() === word[j].toLowerCase()) {
        arr.push(word[j]);
      }
    }

    if(arr.length > 1) {
      result.push(')');
    } else {
      result.push('(');
    }
  }

  return result.join('');
}

// console.log(duplicateEncode('din')); // "((("
// console.log(duplicateEncode('recede')); // "()()()"
// console.log(duplicateEncode("Success")); // ")())())","should ignore case"
// console.log(duplicateEncode("(( @")); // "))(("

