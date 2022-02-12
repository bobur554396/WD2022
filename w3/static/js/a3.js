console.log(2 == '2');
console.log(2 === '2');

let arr = [11, 22, 33, 44];
arr.push(55);
arr.pop();
console.log(arr.length);
console.log(arr.indexOf(33));

arr.find(function(v) {
  if (v == 22)
    console.log('hi');
});

let b = arr.slice(2, 4);
console.log(arr);
console.log(b);

arr.splice(2, 1);
console.log(arr);

let c = arr.map(function(v) {
  return v + 5;
});
console.log(c);

let d = c.filter(function (v) {
  return v > 20;
});
console.log(d);

let s = c.reduce(function(sum, v) {
  return sum + v;
}, 0);
console.log(s);


// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }
// console.log(i); //


// for (let v of arr){
//   console.log(v);
// }


// arr.forEach(function (v) {
//   console.log(v);
// });


// let i = 0;
// while(i < arr.length){
//   console.log(arr[i]);
//   i++;
// }