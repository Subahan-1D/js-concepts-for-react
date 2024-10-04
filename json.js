// JSON, Fetch, keys, values, array add or remove using dots

// object ot json => stirngify.parse
const student = {
  name: "md.subahan ali",
  age: 12,
  roll: 677317,
  movices : ['superstar','tomar jonno maya hoi']
};

const studentJson = JSON.stringify(student);
// console.log(student) ;
// console.log(studentJson);

// json stirngify to json object

const studentObj = JSON.parse(studentJson);
// console.log(studentObj)

// 2. fetch  structure
// fetch("url")
//   .then(res.json())
//   .then((data) => console.log(data));

  // object , keys , value

  const keys = Object.keys(student)
//   const values = Object.values(student)
  console.log(keys) ;
//   console.log(values)

// filter 
