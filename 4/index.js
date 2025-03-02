/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
Names given are always valid strings.
*/

function areYouPlayingBanjo(name) {
  const firstLetter = name.slice(0, 1);
  console.log('/^r/i.test(name): ', /^r/i.test(name));

  if(firstLetter.toLowerCase() === 'r') {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

areYouPlayingBanjo('rolf'); // "rolf plays banjo"
