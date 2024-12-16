function expandedForm(num) {
  const result = ('' + num).split('').reduce(function (sum, val) {
    return sum + +val
  }, 0)

  console.log(result);;
}

// expandedForm(12) // '10 + 2';
// expandedForm(42) // '40 + 2';
expandedForm(70304) // '70000 + 300 + 4';
