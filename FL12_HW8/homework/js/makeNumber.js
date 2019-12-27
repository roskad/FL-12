function makeNumber(something) {
  let number = something.replace(/[^0-9]/g, '');
  return number;
}
console.log(makeNumber('erer384jjjfd123'));