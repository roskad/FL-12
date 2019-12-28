function makeNumber(something) {
  let number = '';
  for (let i in something) {
    if (parseInt(something[i])) {
      number = number + something[i];
    }
  }
  return number;
}
console.log(makeNumber('erer384jjjfd123'));