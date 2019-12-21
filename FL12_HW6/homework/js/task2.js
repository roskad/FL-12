alert(
    'Hi! Please enter 3 numbers (a, b, c) for triangle sides length'
);
let a = parseFloat(prompt('Enter number a')),
    b = parseFloat(prompt('Enter number b')),
    c = parseFloat(prompt('Enter number c'));

if (a === '' || isNaN(a) || b === '' || isNaN(b) || c === '' || isNaN(c)) {
    alert('Input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('c = ' + c);
}
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && a === c && b === c) {
        console.log('You have Equilateral triangle');
    } else if (a === b || a === c || b === c) {
        console.log('You have Isosceles triangle');
    } else if (a !== b && a !== c && b !== c) {
        console.log('You have Scalene triangle');
    }
} else {
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
}