const str = ['h', 'e', 'l', 'l', 'o'];

function reverseStr(str) {
  let counter = 0;
  const blank = [];
  for (let i = str.length - 1; i >= 0; i--) {
    blank[counter] = str[i];
    counter++;
  }
  return blank;
}

const newString = reverseStr(str);
console.log(newString);

