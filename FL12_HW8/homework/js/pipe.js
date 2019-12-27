function pipe() {
  let x = addOne(arguments[0]);
  if (arguments.length > 1) {
    return x + arguments.length - 2;
  } else {
    return x;
  }
}
function addOne(x) {
  return x + 1;
}
console.log(pipe(1, addOne, addOne, addOne));