alert(
    'Hi! Please enter 3 numbers (a, b, c) for quadratic equation \n (a*x^2 + b*x + c = 0)'
);

let a = parseFloat(prompt('Enter number a')),
    b = parseFloat(prompt('Enter number b')),
    c = parseFloat(prompt('Enter number c'));
let d;
let x1;
let x2;

if (a === 0 || a === '' || isNaN(a)) {
    console.log('Invalid input data');
} else {
    console.log('a = ' + a);
}
if (b === 0 || b === '' || isNaN(b)) {
    console.log('Invalid input data');
} else {
    console.log('b = ' + b);
}
if (c === 0 || c === '' || isNaN(c)) {
    console.log('Invalid input data');
} else {
    console.log('c = ' + c);
}

d = Math.pow(b, 2) - 4 * a * c;
console.log('Discriminant = ' + d);
if (d < 0) {
    console.log('Discriminant < 0. No solution');
} else if (d === 0) {
    x1 = -b / 2 * a;
    console.log('Discriminant = 0. x1 =' + x1);
} else {
    x1 = (-b + Math.sqrt(d) / 2) * a;
    x2 = (-b - Math.sqrt(d) / 2) * a;
    console.log('Discriminant > 0. x1 =' + x1, ';', 'x2 = ' + x2);
}
