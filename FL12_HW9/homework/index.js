// Task 1
function convert() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      arr.push(String(arguments[i]))
    } else if (typeof arguments[i] === 'string') {
      arr.push(Number(arguments[i]))
    }
  }
  return arr;
}
console.log(convert('1', 2, 3, '4'));

//Task 2
function executeforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    func(element, i, arr)
  }
}
executeforEach([1, 2, 3], function (el) {
  console.log(el * 2)
})

//Task 3
function mapArray(arr, callback) {
  let newArr = [];
  executeforEach(arr, function (element, i, arr) {
    newArr.push(callback(parseInt(element), i, arr));
  });
  return newArr;
}
console.log(mapArray([2, '5', 8], function (el) {
  return el + 3
}));

//Task 4
function filterArray(arr, func) {
  let filteredArray = [];
  executeforEach(arr, function (element) {
    if (func(element) === true) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
}
console.log(filterArray([2, 5, 8], function (el) {
  return el % 2 === 0
}));

//Task 5
function flipOver(string) {
  let backwardString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    backwardString += string[i];
  }
  return backwardString;
}
console.log(flipOver('hey world'));