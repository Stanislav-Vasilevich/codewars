function howMuchILoveYou(nbPetals) {
  const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

  if(nbPetals <= arr.length) {
    return arr[nbPetals - 1];
  } else {
    if(nbPetals % arr.length === 0) {
      return arr[arr.length - 1];
    } else {
      return arr[nbPetals % arr.length - 1];
    }
  }
}

console.log(howMuchILoveYou(216));
