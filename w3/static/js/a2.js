var s_name = { // Global variable
  name: "Student1",
  age: 20,
  gpa: 3.8
};


function hi(){ // new block
  if (s_name['gpa'] >= 3.5) { // new block
    let a = s_name['age'];
    console.log('hello ' + s_name['name']);
  } else { // new block
    console.log('Student gpa less than 3.5');
  }

  let a = true;
  console.log(a);
}

hi();