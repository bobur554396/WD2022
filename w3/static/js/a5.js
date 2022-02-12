// -[] Hoisting

// console.log(a);
// var a = 2;

// // var a;
// // console.log(a);
// // a = 2;

// console.log(sum(2, 4));

// function sum(a, b){
//   return a + b;
// }


// let i = 0;
// function show(){
//   console.log(i++);
// }

// setTimeout(show, 4000);
// setInterval(show, 1000);


function f1(callback){
  setTimeout(function(){
    console.log('f1 function');
    callback();
  }, 2000);
}

function f2(){
  console.log('f2 function');
}

f1(f2);
// f2();



// let a = {
//   id: '123',
//   num: [1, 2, 'hello'],
//   b: true
// }

// let s = JSON.stringify(a);
// let b = JSON.parse(s);

// console.log(typeof (s));
// console.log(b);

// a = undefined;

// let p = a && a['id'];
// console.log(p);