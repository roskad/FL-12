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

//Task 6
function makeListFromRange(arr) {
  let newArr = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(makeListFromRange([2, 7]));

//Task 7
let actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];
function getArrayOfKeys(arr, key) {
  let newArr = [];
  executeforEach(arr, function (element) {
    newArr.push(element[key])
  });
  return newArr;
}
console.log(getArrayOfKeys(actors, 'name'));

//Task 8
function substitute(arr) {
  let newArr = [];
  mapArray(arr, function (element) {
    if (element < 30) {
      newArr.push('*');
    } else {
      newArr.push(element);
    }
  });
  return newArr;
}
console.log(substitute([58, 14, 48, 2, 31, 29]));