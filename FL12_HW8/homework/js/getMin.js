let mas = [2, 3, -1, 0, 4];
function getMin(Array) {
  let min = '';
  for (let i = 0; i < Array.length; i++) {
    if (mas[i] < min) {
      min = mas[i];
    }
  }
  return min;
}
console.log(getMin(mas));