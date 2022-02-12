// let a = document.getElementsByTagName('h1');
// let a = document.getElementsByClassName('box');
// let a = document.getElementById('btn');
// let a = document.querySelector('html body .box')
let a = document.querySelector('.box');
// console.log(a);
a.innerHTML = "hello message";
a.style.color = 'blue';
a.style.fontSize = '25px';
a.style.fontWeight = 'bold';


let btn = document.querySelector('#btn');
btn.style.background = "yellow";
btn.style.fontSize = "25px";
btn.style.border = "solid 5px green";
btn.style.borderRadius = "20px";
btn.style.padding = "10px 40px";
console.log(btn.getAttribute('data-id'));
btn.setAttribute('data-id', 111);
console.log(btn.offsetTop);
console.log(btn.offsetLeft);


let text = document.createElement('h3');
text.innerHTML = "new created h3 from JS";

let container = document.querySelector('.container');
container.appendChild(text);


// alert('Message');
//let res = confirm("Agree?")
// let n = prompt("Enter your name");
// console.log(n);

let i = 0;
function show(){
  console.log(i++);
}

// btn.onclick = show;
// btn.addEventListener('click', show);
btn.addEventListener('click', function(){
  alert('Message');
});




