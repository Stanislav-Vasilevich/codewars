/* Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.

Task
Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8 */
/* Проблема Похоже, какой-то сантехник-хулиган и его брат снова бегают и портят ваши сцены. Трубы, соединяющие этапы вашего уровня, необходимо починить, прежде чем вы получите новые жалобы. Трубы правильные, если каждая трубка после первой на 1 больше предыдущей. Задача Учитывая список уникальных чисел, отсортированных в порядке возрастания, верните новый список так, чтобы значения увеличивались на 1 для каждого индекса от минимального значения до максимального значения (оба включены). Пример Вход: 1,3,5,6,7,8 Выход: 1,2,3,4,5,6,7,8 */
function pipeFix(numbers) {
  let result = [];

  for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    result.push(i);
  }

  return result;
}

pipeFix([1,2,3,5,6,8,9], '[1,2,3,4,5,6,7,8,9]') // [1,2,3,4,5,6,7,8,9];
pipeFix([1,2,3,12], '[1,2,3,4,5,6,7,8,9,10,11,12]') // [1,2,3,4,5,6,7,8,9,10,11,12];
pipeFix([6,9], '[6,7,8,9]') // [6,7,8,9];
pipeFix([-1,4], '[-1,0,1,2,3,4]') // [-1,0,1,2,3,4];
pipeFix([1,2,3], '[1,2,3]') // [1,2,3];
