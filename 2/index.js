function rentalCarCost(d) {
  if (d >= 7) {
    return (d * 40) - 50;
  } else if (d < 7 && d >= 3) {
    return (d * 40) - 20;
  } else {
    return d * 40;
  }
}

console.log('40:', rentalCarCost(1));
console.log('80:', rentalCarCost(2));
console.log('100:', rentalCarCost(3));
console.log('140:', rentalCarCost(4));
console.log('180:', rentalCarCost(5));
console.log('220:', rentalCarCost(6));
console.log('230:', rentalCarCost(7));
console.log('270:', rentalCarCost(8));
console.log('310:', rentalCarCost(9));
console.log('350:', rentalCarCost(10));
