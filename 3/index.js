/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
* */

function invert(array) {
  if(array.length === 0) return [];

  const result = [];

  for (let item of array) {
    result.push(-item);
  }

  return result;
}

console.log(invert([]));;

// [] --> []
