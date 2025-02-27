function findAverage(array) {
  let result = 0;

  if(array.length === 0) return 0;

  for(let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result / array.length;
}

console.log(findAverage([])); //  should equal 0
