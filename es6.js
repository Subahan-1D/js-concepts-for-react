// 1. es6 template string

const number = [22, 23, 443, 242, 22342, 34323];
number[2] = 24;
console.log("just array call : ",number)

const student = {
  name: "Md.Subahan Ali",
  roll: 677317,
  reg: 1502221967,
  department: "Computer Science and Technology",
  group: "B",
  age: 18,
};

const about = `My Name is : ${student.name}`;

// 2 . arrow function

const getFiftyFive = () => 55;
const getSeventyFive = (num) => num + 75;
const isEven = (x) => x % 2 == 0;
const addThere = (x, y, z) => x + y + z;

// multiline arrow function
const doMath = (num1, num2) => {
  const total = num1 + num2;
  return total;
};
// function call 
const data = doMath(3, 56);
console.log("data", data);


// 3 . speared operator  

const newNumbers  = [...number];
newNumbers.push(55)
console.log("just speared operator : ", newNumbers)

// 4 .  create a new array form and older array add an element 

const currentNumbers  = [...newNumbers,77,99,33]
console.log(currentNumbers)


