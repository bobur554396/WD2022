let a = 2; // a - number
a = 'hi'; // a - string
let b = '2';

console.log(a == b);
console.log(a === b);

console.log(0 == '');
console.log(0 == []);
console.log(0 == {});

function sum(a, b) {
  return a + b;
}

console.log(sum('2', 3));