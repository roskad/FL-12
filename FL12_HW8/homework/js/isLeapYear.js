function isLeapYear(input) {
  let date = new Date(input);
  if (date instanceof Date && !isNaN(date)) {
    let year = date.getFullYear();
    if (new Date(year, 1, 29).getMonth() === 1) {
      return year + ' is a leap year';
    } else {
      return year + ' is not a leap year';
    }
  } else {
    return 'Invalid Date';
  }
}
console.log(isLeapYear('2020-01-01 00:00:00'));
console.log(isLeapYear('2020-01-01 00:00:00777'));
console.log(isLeapYear('2021-01-15 13:00:00'));
console.log(isLeapYear(1213131313135465656654564646542132132131));
console.log(isLeapYear(1213131313)); 