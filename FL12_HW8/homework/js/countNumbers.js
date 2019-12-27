function countNumber(something) {
  let number = something.replace(/[^0-9]/g, '');
  let count = {};
  for (let i = 0; i < number.length; i++) {
    let a = number[i];
    if (count[a] !== undefined) {
      ++count[a];
    } else {
      count[a] = 1;
    }
  }
  return count;
}
console.log(countNumber('jdjjka000466588kkkfs662555'));